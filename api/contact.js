import { Resend } from "resend";
import {
  checkEmailRateLimit,
  checkIpRateLimit,
  getClientIp,
  getRetryAfterSeconds,
} from "./rateLimit.js";
import { verifyTurnstile } from "./verifyTurnstile.js";

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || "wilbert.rodrigo.dev@gmail.com";

function formatFromEmail(value) {
  const from = value || process.env.EMAIL_FROM;
  return from.includes("<") ? from : `Wilbert Rodrigo <${from}>`;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getResendErrorMessage(error) {
  if (!error) return null;
  if (typeof error === "string") return error;
  return error.message || "Could not send your message. Please try again later.";
}

function isSandboxRecipientError(error) {
  const message = getResendErrorMessage(error) || "";
  return message.includes("only send testing emails to your own email address");
}

function buildAcknowledgmentEmail(visitorMessage) {
  const safeMessage = escapeHtml(visitorMessage).replace(/\n/g, "<br>");

  return {
    subject: "I received your message — Wilbert Rodrigo",
    text: [
      "Hi,",
      "",
      "Thank you for contacting me through my portfolio. This email confirms that I have received your message:",
      "",
      visitorMessage,
      "",
      "I'll review it and get back to you as soon as I can.",
      "",
      "Best regards,",
      "Wilbert Rodrigo",
      "Software Engineer",
      "wilbert.rodrigo.dev@gmail.com",
    ].join("\n"),
    html: `
      <p>Hi,</p>
      <p>Thank you for contacting me through my portfolio. This email confirms that I have received your message:</p>
      <blockquote style="margin:16px 0;padding:12px 16px;border-left:3px solid #ccc;background:#f7f7f7;color:#333;">
        ${safeMessage}
      </blockquote>
      <p>I'll review it and get back to you as soon as I can.</p>
      <p>Best regards,<br>
      <strong>Wilbert Rodrigo</strong><br>
      Software Engineer<br>
      <a href="mailto:wilbert.rodrigo.dev@gmail.com">wilbert.rodrigo.dev@gmail.com</a></p>
    `,
  };
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const clientIp = getClientIp(req);
  const ipRateLimit = await checkIpRateLimit(clientIp);

  if (!ipRateLimit.allowed) {
    res.setHeader(
      "Retry-After",
      String(getRetryAfterSeconds(ipRateLimit.reset)),
    );
    return res.status(429).json({
      error: "You can only send one message per day from your network. Please try again tomorrow.",
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: "Contact form is not configured yet. Please email me directly.",
    });
  }

  const fromEmail = formatFromEmail(process.env.RESEND_FROM_EMAIL);
  const { email, message, captchaToken } = req.body ?? {};
  const visitorEmail = email?.trim();
  const visitorMessage = message?.trim();

  if (!visitorEmail || !visitorMessage) {
    return res.status(400).json({ error: "Email and message are required." });
  }

  if (!captchaToken) {
    return res.status(400).json({ error: "Please complete the captcha." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(visitorEmail)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  const emailRateLimit = await checkEmailRateLimit(visitorEmail);

  if (!emailRateLimit.allowed) {
    res.setHeader(
      "Retry-After",
      String(getRetryAfterSeconds(emailRateLimit.reset)),
    );
    return res.status(429).json({
      error: "You can only send one message per day with this email. Please try again tomorrow.",
    });
  }

  try {
    const captchaValid = await verifyTurnstile(captchaToken, clientIp);

    if (!captchaValid) {
      return res.status(400).json({
        error: "Captcha verification failed. Please try again.",
      });
    }
  } catch (error) {
    if (error.message === "captcha_not_configured") {
      return res.status(503).json({
        error: "Contact form is not configured yet. Please email me directly.",
      });
    }

    console.error("Captcha verification error:", error);
    return res.status(500).json({
      error: "Could not verify captcha. Please try again.",
    });
  }

  const resend = new Resend(apiKey);
  const acknowledgment = buildAcknowledgmentEmail(visitorMessage);

  try {
    const { error: notifyError } = await resend.emails.send({
      from: fromEmail,
      to: [CONTACT_EMAIL],
      replyTo: visitorEmail,
      subject: `Portfolio message from ${visitorEmail}`,
      text: `From: ${visitorEmail}\n\n${visitorMessage}`,
      html: `<p><strong>From:</strong> ${escapeHtml(visitorEmail)}</p><p>${escapeHtml(visitorMessage).replace(/\n/g, "<br>")}</p>`,
    });

    if (notifyError) {
      return res.status(500).json({ error: getResendErrorMessage(notifyError) });
    }

    const { error: replyError } = await resend.emails.send({
      from: fromEmail,
      to: [visitorEmail],
      replyTo: CONTACT_EMAIL,
      subject: acknowledgment.subject,
      text: acknowledgment.text,
      html: acknowledgment.html,
    });

    if (!replyError) {
      return res.status(200).json({ ok: true, autoReplySent: true });
    }

    if (isSandboxRecipientError(replyError)) {
      console.warn("Acknowledgment skipped (Resend sandbox):", replyError.message);
      return res.status(200).json({ ok: true, autoReplySent: false });
    }

    console.error("Acknowledgment error:", replyError);
    return res.status(500).json({ error: getResendErrorMessage(replyError) });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      error: getResendErrorMessage(error),
    });
  }
}

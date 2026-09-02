import { useCallback, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Turnstile from "../components/Turnstile";
import messageService from "../services/messageService";

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

const UPWORK_URL = "https://www.upwork.com/freelancers/~01512cec647f431fab";

const details = [
  {
    label: "Email",
    href: "mailto:wilbert.rodrigo.dev@gmail.com",
    value: "wilbert.rodrigo.dev@gmail.com",
  },
  {
    label: "Upwork",
    href: UPWORK_URL,
    value: "Hire me on Upwork",
    external: true,
  },
  {
    label: "Phone",
    href: "tel:+639399716621",
    value: "+63 939 971 6621",
  },
  {
    label: "Location",
    value: "Antipolo City, Philippines",
  },
];

function Contact() {
  const pendingSubmitRef = useRef(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const sendMessage = useCallback(async (captchaToken) => {
    setStatus("sending");
    setFeedback("");

    try {
      const result = await messageService.createMessage({
        message,
        email,
        captchaToken,
      });
      setMessage("");
      setEmail("");
      setStatus("success");
      setFeedback(
        result.autoReplySent
          ? "Message sent. A confirmation email was sent to your inbox — check spam or promotions if you don't see it."
          : "Message sent. I'll get back to you soon.",
      );
    } catch (err) {
      setStatus("error");
      setFeedback(
        err.response?.data?.error ||
          "Could not send your message. Please try again.",
      );
    }
  }, [message, email]);

  const handleCaptchaVerify = useCallback(
    (token) => {
      if (pendingSubmitRef.current) {
        pendingSubmitRef.current = false;
        sendMessage(token);
      }
    },
    [sendMessage],
  );

  const handleCaptchaExpire = useCallback(() => {
    pendingSubmitRef.current = false;
    setStatus("idle");
    setFeedback("Verification expired. Click Send message to try again.");
  }, []);

  const handleCaptchaError = useCallback(() => {
    pendingSubmitRef.current = false;
    setStatus("error");
    setFeedback("Captcha failed to load. Please refresh and try again.");
  }, []);

  const handleMessage = (e) => {
    e.preventDefault();

    if (!TURNSTILE_SITE_KEY) {
      setStatus("error");
      setFeedback("Contact form is not configured yet.");
      return;
    }

    if (status === "sending" || status === "verifying") {
      return;
    }

    setFeedback("");
    pendingSubmitRef.current = true;
    setStatus("verifying");
  };

  return (
    <section className="flex min-h-[70vh] flex-col justify-center gap-12 laptop:flex-row laptop:items-start laptop:justify-between laptop:gap-20">
      <div className="flex max-w-md flex-col items-center text-center laptop:items-start laptop:text-left">
        <p className="main-span my-0 text-sm uppercase tracking-[0.28em]">
          Get in touch
        </p>
        <h1 className="mt-4 text-4xl font-bold tablet:text-5xl">Contact</h1>
        <p className="mt-6 text-lg leading-relaxed">
          Open to software engineering work, collaboration, and conversations
          about backend systems and workflow automation.
        </p>
        <div className="mt-6 border border-white/25 p-4 text-left">
          <p className="my-0 text-lg leading-relaxed">
            <span className="main-span font-semibold">Free for students.</span>{" "}
            I volunteer capstone QA and software development mentoring at no
            cost — help with testing, requirements, quality practices, and
            technical feedback throughout your project.{" "}
            <a href="#contact-form" className="contact-link font-semibold">
              Contact me here
            </a>{" "}
            or email{" "}
            <a href="mailto:wilbert.rodrigo.dev@gmail.com" className="contact-link">
              wilbert.rodrigo.dev@gmail.com
            </a>
            .
          </p>
        </div>

        <dl className="mt-8 flex w-full flex-col gap-5 text-left">
          {details.map((item) => (
            <div key={item.label}>
              <dt className="text-sm uppercase tracking-[0.18em] opacity-60">
                {item.label}
              </dt>
              <dd className="mt-1 text-lg">
                {item.href ? (
                  <a
                    href={item.href}
                    className="contact-link"
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex gap-4">
          <a
            href="https://www.linkedin.com/in/wfrotj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="contact-social"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/wfrotj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="contact-social"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            className="contact-social"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.208-1.032.045-.23c.192-1.081.6-2.9 2.821-2.9 1.48 0 2.68 1.21 2.68 2.694 0 1.488-1.22 2.695-2.68 2.695zm0-8.14c-2.725 0-4.813 1.767-5.64 4.184-1.013-1.36-1.782-2.987-2.247-4.336H8.046l-.73 13.9c.614.04 1.24.07 1.873.07 2.135 0 4.19-.43 6.073-1.21.3-.13.59-.27.87-.43.76 1.37 2.17 2.3 3.77 2.3 3.13 0 5.67-2.56 5.67-5.72 0-3.15-2.54-5.71-5.67-5.71z" />
            </svg>
          </a>
        </div>
      </div>

      <form
        id="contact-form"
        onSubmit={handleMessage}
        className="flex w-full max-w-md flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm uppercase tracking-[0.18em]">
            Email
          </label>
          <input
            id="email"
            className="contact-field"
            required
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm uppercase tracking-[0.18em]"
          >
            Message
          </label>
          <textarea
            id="message"
            className="contact-field min-h-[140px] resize-y"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {status === "verifying" ? (
          <>
            <p className="my-0 text-sm opacity-80">
              Complete the Cloudflare check below to send your message.
            </p>
            {TURNSTILE_SITE_KEY ? (
              <Turnstile
                siteKey={TURNSTILE_SITE_KEY}
                onVerify={handleCaptchaVerify}
                onExpire={handleCaptchaExpire}
                onError={handleCaptchaError}
              />
            ) : null}
          </>
        ) : null}
        {!TURNSTILE_SITE_KEY ? (
          <p className="my-0 text-sm text-red-400">
            Captcha is not configured. Add VITE_TURNSTILE_SITE_KEY to your
            environment.
          </p>
        ) : null}
        <button
          className="home-btn home-btn-primary mt-2 self-start disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={
            status === "sending" || status === "verifying" || !TURNSTILE_SITE_KEY
          }
        >
          {status === "sending"
            ? "Sending..."
            : status === "verifying"
              ? "Verifying..."
              : "Send message"}
        </button>
        {feedback ? (
          <p
            className={
              status === "error"
                ? "my-0 text-red-400"
                : "my-0 text-green-400"
            }
            role="status"
          >
            {feedback}
          </p>
        ) : null}
      </form>
    </section>
  );
}

export default Contact;

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const DAY_MS = 24 * 60 * 60 * 1000;
const memoryHits = new Map();

function createMemoryLimiter(maxRequests, windowMs) {
  return {
    async limit(key) {
      const now = Date.now();
      const hits = memoryHits.get(key) || [];
      const recent = hits.filter((time) => now - time < windowMs);

      if (recent.length >= maxRequests) {
        return {
          success: false,
          reset: recent[0] + windowMs,
        };
      }

      recent.push(now);
      memoryHits.set(key, recent);

      return {
        success: true,
        reset: now + windowMs,
      };
    },
  };
}

function createLimiter(maxRequests, window, prefix) {
  if (
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    return new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(maxRequests, window),
      prefix,
    });
  }

  const windowMs =
    window === "1 d" ? DAY_MS : window === "1 h" ? 60 * 60 * 1000 : 10 * 60 * 1000;
  return createMemoryLimiter(maxRequests, windowMs);
}

const ipLimiter = createLimiter(1, "1 d", "contact:ip");
const emailLimiter = createLimiter(1, "1 d", "contact:email");

export function getClientIp(req) {
  return (
    req.headers?.["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.headers?.["x-real-ip"] ||
    "unknown"
  );
}

export async function checkIpRateLimit(ip) {
  const result = await ipLimiter.limit(ip);
  return {
    allowed: result.success,
    reset: result.reset,
  };
}

export async function checkEmailRateLimit(email) {
  const result = await emailLimiter.limit(email.toLowerCase());
  return {
    allowed: result.success,
    reset: result.reset,
  };
}

export function getRetryAfterSeconds(reset) {
  if (!reset) {
    return DAY_MS / 1000;
  }

  const resetMs = typeof reset === "number" ? reset : Date.now();
  return Math.max(1, Math.ceil((resetMs - Date.now()) / 1000));
}

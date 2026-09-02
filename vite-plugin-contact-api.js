import { loadEnv } from "vite";

async function readRequestBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString();
  return raw ? JSON.parse(raw) : {};
}

function createMockResponse(res) {
  const mockRes = {
    statusCode: 200,
    headers: {},
    setHeader(key, value) {
      this.headers[key] = value;
      return this;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      res.statusCode = this.statusCode;
      res.setHeader("Content-Type", "application/json");
      for (const [key, value] of Object.entries(this.headers)) {
        res.setHeader(key, value);
      }
      res.end(JSON.stringify(payload));
    },
    end(data) {
      res.statusCode = this.statusCode;
      for (const [key, value] of Object.entries(this.headers)) {
        res.setHeader(key, value);
      }
      res.end(data);
    },
  };

  return mockRes;
}

export function contactApiDevPlugin(mode) {
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);

  return {
    name: "contact-api-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/api/contact") {
          return next();
        }

        try {
          const handler = (await import("./api/contact.js")).default;
          const body =
            req.method === "POST" ? await readRequestBody(req) : undefined;
          const mockReq = {
            method: req.method,
            body,
            headers: req.headers,
          };
          const mockRes = createMockResponse(res);

          await handler(mockReq, mockRes);
        } catch (error) {
          console.error("Contact API dev error:", error);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Internal server error" }));
        }
      });
    },
  };
}

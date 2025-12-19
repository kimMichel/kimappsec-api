import Fastify from "fastify";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { z } from "zod";

export async function buildServer() {
  const app = Fastify({ logger: true });

  await app.register(helmet);
  await app.register(cors, { origin: true });

  await app.register(swagger, {
    openapi: {
      info: { title: "My API", version: "1.0.0" },
    },
  });
  await app.register(swaggerUI, { routePrefix: "/docs" });

  app.get("/health", async () => ({ ok: true }));

  app.get("/api/v1/echo", async (req) => {
    const query = z.object({ msg: z.string().min(1) }).parse(req.query);
    return { echo: query.msg };
  });

  return app;
}

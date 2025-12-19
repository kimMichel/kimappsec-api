import Fastify from "fastify";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import registerRoutes from "./infrastructure/http/routes/index.mjs";

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

  await app.register(registerRoutes);

  return app;
}

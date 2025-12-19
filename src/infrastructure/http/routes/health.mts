import { type FastifyPluginAsync } from "fastify";
import { checkHealth } from "../../../application/health/check-health.mjs";

const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get("/health", async () => checkHealth());
};

export default healthRoutes;

import { type FastifyPluginAsync } from "fastify";
import healthRoutes from "./health.mjs";

const registerRoutes: FastifyPluginAsync = async (app) => {
  await app.register(healthRoutes);
};

export default registerRoutes;

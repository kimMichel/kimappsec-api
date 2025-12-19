import "dotenv/config";
import { buildServer } from "./app.mjs";

const app = await buildServer();

const port = Number(process.env.PORT ?? 3000);
await app.listen({ port, host: "0.0.0.0" });

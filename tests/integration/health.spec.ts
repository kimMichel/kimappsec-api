import { beforeAll, afterAll, describe, expect, it } from "vitest";
import { buildServer } from "../../src/app.mjs";
import type { FastifyInstance } from "fastify";

describe("GET /health", () => {
    let app: FastifyInstance;

    beforeAll(async () => {
        app = await buildServer();
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });

    it("should responds with ok", async () => {
        const res = await app.inject({ method: "GET", url: "/health" });
        expect(res.statusCode).toBe(200);
        expect(res.json()).toEqual({ ok: true });
    })
});
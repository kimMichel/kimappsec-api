import { describe, it, expect, vi, beforeEach } from "vitest";
import { checkHealth } from "../../src/application/health/check-health.mjs";
import { getHealthStatus, type HealthStatus } from "../../src/domain/health/health-status.mjs";

vi.mock("../../src/domain/health/health-status.mjs", () => ({
    getHealthStatus: vi.fn(),
}));


const getHealthStatusMock = vi.mocked(getHealthStatus);

beforeEach(() => {
    vi.clearAllMocks();
});

describe("checkHealth", () => {
    it("returns the health status from the domain layer", async () => {
        const status = { ok: true } as HealthStatus;
        getHealthStatusMock.mockResolvedValueOnce(status);

        await expect(checkHealth()).resolves.toBe(status);
        expect(getHealthStatusMock).toHaveBeenCalledTimes(1);
    });

    it("propagates failures from the domain layer", async () => {
        const error = new Error("unhealthy");
        getHealthStatusMock.mockRejectedValueOnce(error);

        await expect(checkHealth()).rejects.toThrow(error);
        expect(getHealthStatusMock).toHaveBeenCalledTimes(1);
    });
});
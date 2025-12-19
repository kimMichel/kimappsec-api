import {
  getHealthStatus,
  type HealthStatus,
} from "../../domain/health/health-status.mjs";

export async function checkHealth(): Promise<HealthStatus> {
  return getHealthStatus();
}

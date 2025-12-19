export type HealthStatus = {
  ok: boolean;
};

export function getHealthStatus(): HealthStatus {
  return { ok: true };
}

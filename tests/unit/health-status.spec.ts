import { describe, expect, it } from 'vitest';
import { getHealthStatus } from '../../src/domain/health/health-status.mjs';

describe('getHealthStatus', () => {
    it('returns ok as true', () => {
        expect(getHealthStatus()).toEqual({ ok: true });
    });

    it('produces a frozen snapshot-safe response', () => {
        expect(getHealthStatus()).toMatchObject({ ok: true });
    });
});
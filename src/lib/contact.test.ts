import { describe, it, expect, vi, afterEach } from 'vitest';
import { submitContact } from './contact';

const payload = {
  name: 'Ada',
  email: 'ada@example.com',
  message: 'Hello',
  timestamp: '2026-06-22T00:00:00.000Z'
};

function mockFetch(response: { ok: boolean; body: unknown }) {
  return vi.fn().mockResolvedValue({
    ok: response.ok,
    json: async () => response.body
  } as unknown as Response);
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('submitContact', () => {
  it('resolves when the provider reports success', async () => {
    vi.stubGlobal('fetch', mockFetch({ ok: true, body: { success: true, message: 'Sent' } }));
    await expect(submitContact(payload)).resolves.toBeUndefined();
  });

  it('rejects on a non-ok HTTP status', async () => {
    vi.stubGlobal('fetch', mockFetch({ ok: false, body: { success: false, message: 'Server error' } }));
    await expect(submitContact(payload)).rejects.toThrow('Server error');
  });

  it('rejects a 2xx response when the provider reports failure', async () => {
    // The core regression: HTTP 200 but success:false must NOT resolve.
    vi.stubGlobal('fetch', mockFetch({ ok: true, body: { success: false, message: 'Validation failed' } }));
    await expect(submitContact(payload)).rejects.toThrow('Validation failed');
  });

  it('rejects a 2xx captcha failure reported in the body', async () => {
    vi.stubGlobal('fetch', mockFetch({ ok: true, body: { success: false, message: 'Invalid captcha' } }));
    await expect(submitContact({ ...payload, hCaptchaResponse: 'token' })).rejects.toThrow('Invalid captcha');
  });

  it('rejects when the body is not valid JSON', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => {
        throw new Error('not json');
      }
    } as unknown as Response));
    await expect(submitContact(payload)).rejects.toThrow('Web3Forms submission failed');
  });
});

export type Consent = { marketing: boolean; ts: number };

const KEY = "vyrelio_consent_v1";
const TTL_MS = 1000 * 60 * 60 * 24 * 180; // 6 months
const EVENT = "vyrelio:consent";

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Partial<Consent> | null;
    if (!data || typeof data.marketing !== "boolean" || typeof data.ts !== "number") return null;
    if (Date.now() - data.ts > TTL_MS) return null;
    return { marketing: data.marketing, ts: data.ts };
  } catch {
    return null;
  }
}

export function writeConsent(marketing: boolean) {
  if (typeof window === "undefined") return;
  try {
    const value: Consent = { marketing, ts: Date.now() };
    window.localStorage.setItem(KEY, JSON.stringify(value));
    try {
      window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
    } catch {}
  } catch {}
}

export function hasMarketingConsent(): boolean {
  const c = readConsent();
  return !!(c && c.marketing);
}

export function onConsentChange(cb: (c: Consent) => void) {
  if (typeof window === "undefined") return () => {};
  const handler = (e: Event) => {
    const anyEvent = e as CustomEvent;
    const detail = anyEvent?.detail as Consent | undefined;
    if (detail) cb(detail);
  };
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

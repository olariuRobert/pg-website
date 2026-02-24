export type ContactConfig = {
  phone: string;
  whatsappUrl: string | null;
  primaryContactHref: string;
  plausibleDomain: string | null;
};

const FALLBACK_PHONE = "+15550000000";

const normalizePhone = (raw?: string): string | null => {
  if (!raw) {
    return null;
  }

  const compact = raw.trim().replace(/[\s()-]/g, "");

  if (!/^\+?[1-9]\d{6,14}$/.test(compact)) {
    return null;
  }

  return compact.startsWith("+") ? compact : `+${compact}`;
};

const normalizeAbsoluteUrl = (raw?: string): string | null => {
  if (!raw) {
    return null;
  }

  try {
    const url = new URL(raw);
    return url.toString();
  } catch {
    return null;
  }
};

export const getContactConfig = (): ContactConfig => {
  const phone = normalizePhone(process.env.NEXT_PUBLIC_CONTACT_PHONE) ?? FALLBACK_PHONE;
  const whatsappUrl = normalizeAbsoluteUrl(process.env.NEXT_PUBLIC_WHATSAPP_URL);
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim() || null;

  return {
    phone,
    whatsappUrl,
    primaryContactHref: whatsappUrl ?? `tel:${phone}`,
    plausibleDomain,
  };
};

export type ContactCtaSource = "hero" | "header" | "footer";

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: {
        props?: Record<string, string>;
      },
    ) => void;
  }
}

export const trackContactCtaClick = (source: ContactCtaSource): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.plausible?.("contact_cta_click", {
    props: { source },
  });
};

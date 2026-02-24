export type NavItem = {
  label: string;
  href: string;
};

export type ServiceIconName =
  | "tenant"
  | "apartment"
  | "cadence"
  | "repairs"
  | "utilities";

export type ServiceItem = {
  title: string;
  description: string;
  icon: ServiceIconName;
};

export type HowItWorksStep = {
  title: string;
  description: string;
};

export type AudienceItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LandingContent = {
  brandName: string;
  header: {
    languageLabel: string;
  };
  nav: NavItem[];
  hero: {
    kicker: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trust: {
    title: string;
    description: string;
    points: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  howItWorks: {
    title: string;
    description: string;
    stepLabel: string;
    steps: HowItWorksStep[];
  };
  audience: {
    title: string;
    description: string;
    landlordHeading: string;
    renterHeading: string;
    landlordPoints: AudienceItem[];
    renterPoints: AudienceItem[];
  };
  faq: {
    title: string;
    description: string;
    items: FaqItem[];
  };
  finalCta: {
    title: string;
    description: string;
    primaryCta: string;
    responseTime: string;
  };
  footer: {
    companyLine: string;
    rights: string;
    reachOutLabel: string;
    bookCallLabel: string;
    privacyLabel: string;
    termsLabel: string;
  };
};

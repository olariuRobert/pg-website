import type { Locale } from "@/lib/i18n";

export type LegalSection = {
  title: string;
  body: string;
};

export type LegalPageContent = {
  metadata: {
    title: string;
    description: string;
  };
  eyebrow: string;
  heading: string;
  updatedLabel: string;
  updatedAt: string;
  sections: LegalSection[];
  backToHomepageLabel: string;
};

export const privacyContentByLocale: Record<Locale, LegalPageContent> = {
  en: {
    metadata: {
      title: "Privacy Policy",
      description: "Privacy policy for Property Guardian website visitors and clients.",
    },
    eyebrow: "Legal",
    heading: "Privacy Policy",
    updatedLabel: "Last updated",
    updatedAt: "February 24, 2026",
    sections: [
      {
        title: "1. Information We Collect",
        body: "Property Guardian may collect contact details, service inquiry information, and other details you submit through calls, messaging apps, or website forms.",
      },
      {
        title: "2. How We Use Information",
        body: "We use collected information to respond to inquiries, provide rental oversight services, coordinate communications between landlords and renters, and improve service quality.",
      },
      {
        title: "3. Analytics",
        body: "We may use privacy-focused analytics to understand website usage, including interaction with contact calls-to-action.",
      },
      {
        title: "4. Data Sharing",
        body: "We share data only as needed to provide services, comply with legal obligations, or protect legitimate business interests. We do not sell personal information.",
      },
      {
        title: "5. Contact",
        body: "To request updates, corrections, or removal of your data, contact Property Guardian through the primary contact channel listed on the homepage.",
      },
    ],
    backToHomepageLabel: "Back to homepage",
  },
  ro: {
    metadata: {
      title: "Politica de confidentialitate",
      description: "Politica de confidentialitate pentru vizitatorii si clientii Property Guardian.",
    },
    eyebrow: "Informatii legale",
    heading: "Politica de confidentialitate",
    updatedLabel: "Ultima actualizare",
    updatedAt: "24 februarie 2026",
    sections: [
      {
        title: "1. Informatii pe care le colectam",
        body: "Property Guardian poate colecta date de contact, informatii despre solicitari de servicii si alte detalii pe care le transmiti prin apeluri, aplicatii de mesagerie sau formulare web.",
      },
      {
        title: "2. Cum folosim informatiile",
        body: "Folosim informatiile colectate pentru a raspunde solicitarilor, a furniza servicii de supraveghere a inchirierii, a coordona comunicarea dintre proprietari si chiriasi si a imbunatati calitatea serviciilor.",
      },
      {
        title: "3. Analitice",
        body: "Putem utiliza analitice orientate spre confidentialitate pentru a intelege folosirea site-ului, inclusiv interactiunea cu butoanele de contact.",
      },
      {
        title: "4. Partajarea datelor",
        body: "Partajam date doar cand este necesar pentru furnizarea serviciilor, respectarea obligatiilor legale sau protejarea intereselor legitime de afaceri. Nu vindem date personale.",
      },
      {
        title: "5. Contact",
        body: "Pentru actualizarea, corectarea sau stergerea datelor tale, contacteaza Property Guardian prin canalul principal de contact afisat pe pagina principala.",
      },
    ],
    backToHomepageLabel: "Inapoi la pagina principala",
  },
};

export const termsContentByLocale: Record<Locale, LegalPageContent> = {
  en: {
    metadata: {
      title: "Terms of Service",
      description: "Terms of service for Property Guardian website visitors and clients.",
    },
    eyebrow: "Legal",
    heading: "Terms of Service",
    updatedLabel: "Last updated",
    updatedAt: "February 24, 2026",
    sections: [
      {
        title: "1. Service Scope",
        body: "Property Guardian provides operational oversight services between landlords and renters, including verification support, cadence-based monitoring, reparation coordination, and utility payment alerts.",
      },
      {
        title: "2. No Legal Representation",
        body: "Property Guardian does not provide legal representation or legal advice. Parties should seek independent legal counsel where required.",
      },
      {
        title: "3. Communication and Cooperation",
        body: "Service delivery depends on timely information and cooperation from landlords, renters, and third-party service providers involved in tenancy operations.",
      },
      {
        title: "4. Liability",
        body: "Property Guardian is not responsible for losses caused by inaccurate third-party information, delayed responses from external providers, or circumstances outside reasonable control.",
      },
      {
        title: "5. Updates",
        body: "We may update these terms periodically. Continued use of the site or services after updates indicates acceptance of revised terms.",
      },
    ],
    backToHomepageLabel: "Back to homepage",
  },
  ro: {
    metadata: {
      title: "Termeni de utilizare",
      description: "Termeni de utilizare pentru vizitatorii si clientii Property Guardian.",
    },
    eyebrow: "Informatii legale",
    heading: "Termeni de utilizare",
    updatedLabel: "Ultima actualizare",
    updatedAt: "24 februarie 2026",
    sections: [
      {
        title: "1. Domeniul serviciului",
        body: "Property Guardian ofera servicii de supraveghere operationala intre proprietari si chiriasi, incluzand suport pentru verificare, monitorizare pe baza de cadenta, coordonarea reparatiilor si alerte privind plata utilitatilor.",
      },
      {
        title: "2. Fara reprezentare juridica",
        body: "Property Guardian nu ofera reprezentare juridica si nici consultanta juridica. Partile ar trebui sa solicite asistenta juridica independenta atunci cand este necesar.",
      },
      {
        title: "3. Comunicarea si cooperarea",
        body: "Furnizarea serviciilor depinde de informatii transmise la timp si de cooperarea proprietarilor, chiriasilor si furnizorilor terti implicati in operatiunile de inchiriere.",
      },
      {
        title: "4. Raspundere",
        body: "Property Guardian nu este responsabil pentru pierderi cauzate de informatii inexacte furnizate de terti, raspunsuri intarziate din partea furnizorilor externi sau circumstante aflate in afara unui control rezonabil.",
      },
      {
        title: "5. Actualizari",
        body: "Putem actualiza periodic acesti termeni. Continuarea utilizarii site-ului sau a serviciilor dupa actualizari indica acceptarea termenilor revizuiti.",
      },
    ],
    backToHomepageLabel: "Inapoi la pagina principala",
  },
};

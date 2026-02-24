import type { Locale } from "@/lib/i18n";
import type { LandingContent } from "@/types/site";

export type HomeMetadataContent = {
  title: string;
  description: string;
};

export const homeMetadataByLocale: Record<Locale, HomeMetadataContent> = {
  en: {
    title: "Property Guardian | Rental Oversight Between Landlords and Renters",
    description:
      "Property Guardian verifies renters and apartments, coordinates reparations, and monitors utility payment risk on a flexible cadence for landlords and renters.",
  },
  ro: {
    title: "Property Guardian | Supraveghere intre proprietari si chiriasi",
    description:
      "Property Guardian verifica chiriasii si apartamentele, coordoneaza reparatiile si monitorizeaza riscul neplatii utilitatilor printr-o cadenta flexibila stabilita cu ambele parti.",
  },
};

export const landingContentByLocale: Record<Locale, LandingContent> = {
  en: {
    brandName: "Property Guardian",
    header: {
      languageLabel: "Language",
    },
    nav: [
      { label: "Services", href: "#services" },
      { label: "How it works", href: "#how-it-works" },
      { label: "For landlords", href: "#for-landlords" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      kicker: "Rental oversight, without friction",
      title: "Property Guardian stands between landlords and renters to keep every lease on track.",
      description:
        "We verify renters and apartments, coordinate repair actions, and monitor utility payments on a flexible cadence agreed with both parties. Landlords gain visibility while renters get consistent, fair support.",
      primaryCta: "Reach Out",
      secondaryCta: "Book a quick call",
      imageAlt: "Small apartment building under a bright sky with green trees.",
      imageCredit: "Original illustration generated for Property Guardian.",
    },
    trust: {
      title: "A neutral operating partner across the full tenancy",
      description:
        "Property Guardian is not just an introduction service. We stay active through the lease with clear checks, transparent communication, and practical support whenever the property needs attention.",
      points: [
        "Aligned cadence checks set jointly with landlord and renter",
        "Consistent reporting on property status and renter obligations",
        "Early warnings to landlords when utility payment risk appears",
      ],
    },
    services: {
      eyebrow: "Core services",
      title: "What we manage for every active property",
      description:
        "Each service is designed to reduce uncertainty for landlords while keeping expectations clear for renters.",
      items: [
        {
          title: "Renter verification",
          description:
            "Identity and documentation checks before onboarding, with findings shared clearly with the landlord.",
          icon: "tenant",
        },
        {
          title: "Apartment verification",
          description:
            "Initial condition verification of the unit so both parties start with an agreed baseline.",
          icon: "apartment",
        },
        {
          title: "Flexible cadence oversight",
          description:
            "Routine check rhythm tailored to property needs, rental profile, and landlord preference.",
          icon: "cadence",
        },
        {
          title: "Repair coordination",
          description:
            "When issues appear, we coordinate reparations and keep stakeholders updated until closure.",
          icon: "repairs",
        },
        {
          title: "Utility monitoring and alerts",
          description:
            "We monitor utility payment status and flag risks to landlords before they escalate.",
          icon: "utilities",
        },
      ],
    },
    howItWorks: {
      title: "How the engagement works",
      description:
        "A straightforward four-step workflow keeps roles clear and response times predictable.",
      stepLabel: "Step",
      steps: [
        {
          title: "Onboard landlord and property",
          description:
            "We define scope, preferred cadence, communication channels, and escalation rules.",
        },
        {
          title: "Verify renter and apartment baseline",
          description:
            "Tenant records and property condition are verified and documented before ongoing checks begin.",
        },
        {
          title: "Run scheduled oversight",
          description:
            "We execute agreed checkpoints and maintain clear status reporting for the landlord.",
        },
        {
          title: "Coordinate actions and alerts",
          description:
            "Repair needs are managed and utility payment issues are escalated to the landlord promptly.",
        },
      ],
    },
    audience: {
      title: "Landlord-first outcomes, renter-aware operations",
      description:
        "Our model prioritizes landlord risk reduction while preserving a stable day-to-day experience for renters.",
      landlordHeading: "For landlords",
      renterHeading: "For renters",
      landlordPoints: [
        {
          title: "Less operational blind spot",
          description:
            "Regular independent verification means fewer surprises and better leasing decisions.",
        },
        {
          title: "Faster issue response",
          description:
            "Repair requests move through a managed process instead of ad hoc coordination.",
        },
        {
          title: "Earlier risk signals",
          description:
            "Utility payment concerns are flagged early so landlords can intervene before disruption.",
        },
      ],
      renterPoints: [
        {
          title: "Clear expectations",
          description:
            "Defined processes and schedules reduce uncertainty and support smoother tenancy.",
        },
        {
          title: "Structured support",
          description:
            "Repair handling and communication follow a reliable channel rather than informal back-and-forth.",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      description:
        "Answers to the most common questions from landlords before onboarding.",
      items: [
        {
          question: "How often do you perform property and tenant checks?",
          answer:
            "Cadence is flexible. We define it with both landlord and renter at onboarding and can adjust as tenancy conditions change.",
        },
        {
          question: "What exactly gets verified?",
          answer:
            "We verify renter identity and key tenancy documentation, then verify apartment condition to establish a shared operating baseline.",
        },
        {
          question: "How do you handle apartment reparations?",
          answer:
            "We coordinate the repair process, track progress, and communicate updates to keep both sides aligned until resolution.",
        },
        {
          question: "What utility monitoring do you provide?",
          answer:
            "We monitor utility payment status and notify landlords quickly when missed payments or risk patterns are detected.",
        },
        {
          question: "How will we communicate with your team?",
          answer:
            "Communication is organized through agreed channels with concise status updates and clear escalation paths for urgent issues.",
        },
      ],
    },
    finalCta: {
      title: "Ready to protect your rental operations?",
      description:
        "Speak with Property Guardian to define your oversight cadence and launch quickly.",
      primaryCta: "Reach Out",
      responseTime: "Typical response time: within one business day.",
    },
    footer: {
      companyLine: "Property Guardian | Oversight between landlords and renters",
      rights: `(c) ${new Date().getFullYear()} Property Guardian. All rights reserved.`,
      reachOutLabel: "Reach Out",
      bookCallLabel: "Book a quick call",
      privacyLabel: "Privacy",
      termsLabel: "Terms",
    },
  },
  ro: {
    brandName: "Property Guardian",
    header: {
      languageLabel: "Limba",
    },
    nav: [
      { label: "Servicii", href: "#services" },
      { label: "Cum functioneaza", href: "#how-it-works" },
      { label: "Pentru proprietari", href: "#for-landlords" },
      { label: "Intrebari frecvente", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      kicker: "Supraveghere a inchirierii, fara frictiuni",
      title:
        "Property Guardian intermediaza relatia dintre proprietari si chiriasi pentru ca fiecare contract de inchiriere sa ramana pe directia corecta.",
      description:
        "Verificam chiriasii si apartamentele, coordonam actiunile de reparatie si monitorizam plata utilitatilor pe o cadenta flexibila agreata de ambele parti. Proprietarii castiga vizibilitate, iar chiriasii primesc suport consecvent si echitabil.",
      primaryCta: "Contacteaza-ne",
      secondaryCta: "Programeaza un apel scurt",
      imageAlt: "Cladire mica de apartamente sub un cer luminos, cu copaci verzi.",
      imageCredit: "Ilustratie originala generata pentru Property Guardian.",
    },
    trust: {
      title: "Un partener operational neutru pe toata durata inchirierii",
      description:
        "Property Guardian nu este doar un serviciu de intermediere initiala. Ramanem activi pe parcursul contractului cu verificari clare, comunicare transparenta si suport practic ori de cate ori proprietatea necesita atentie.",
      points: [
        "Cadenta verificarilor este stabilita impreuna cu proprietarul si chiriasul",
        "Raportare constanta privind starea proprietatii si obligatiile chiriasului",
        "Alerte timpurii pentru proprietar cand apare risc de neplata a utilitatilor",
      ],
    },
    services: {
      eyebrow: "Servicii esentiale",
      title: "Ce administram pentru fiecare proprietate activa",
      description:
        "Fiecare serviciu este construit pentru a reduce incertitudinea proprietarilor, pastrand in acelasi timp asteptari clare pentru chiriasi.",
      items: [
        {
          title: "Verificarea chiriasului",
          description:
            "Verificari de identitate si documentatie inainte de onboarding, cu rezultate comunicate clar proprietarului.",
          icon: "tenant",
        },
        {
          title: "Verificarea apartamentului",
          description:
            "Verificarea starii initiale a apartamentului, astfel incat ambele parti sa porneasca de la un reper comun.",
          icon: "apartment",
        },
        {
          title: "Supraveghere cu cadenta flexibila",
          description:
            "Ritmul verificarilor este adaptat nevoilor proprietatii, profilului inchirierii si preferintelor proprietarului.",
          icon: "cadence",
        },
        {
          title: "Coordonarea reparatiilor",
          description:
            "Cand apar probleme, coordonam reparatiile si tinem toate partile informate pana la inchidere.",
          icon: "repairs",
        },
        {
          title: "Monitorizare utilitati si alerte",
          description:
            "Monitorizam statusul platilor la utilitati si semnalam rapid proprietarului riscurile inainte sa escaladeze.",
          icon: "utilities",
        },
      ],
    },
    howItWorks: {
      title: "Cum functioneaza colaborarea",
      description:
        "Un flux simplu, in patru pasi, pastreaza rolurile clare si timpii de raspuns predictibili.",
      stepLabel: "Pasul",
      steps: [
        {
          title: "Onboarding pentru proprietar si proprietate",
          description:
            "Definim scopul, cadenta preferata, canalele de comunicare si regulile de escaladare.",
        },
        {
          title: "Verificarea chiriasului si a starii apartamentului",
          description:
            "Datele chiriasului si starea apartamentului sunt verificate si documentate inainte de verificarile recurente.",
        },
        {
          title: "Executarea supravegherii programate",
          description:
            "Realizam verificarile agreate si mentinem raportare clara a statusului pentru proprietar.",
        },
        {
          title: "Coordonarea actiunilor si alertelor",
          description:
            "Gestionam nevoile de reparatie si escaladam rapid catre proprietar problemele legate de plata utilitatilor.",
        },
      ],
    },
    audience: {
      title: "Rezultate orientate spre proprietar, operare echilibrata pentru chirias",
      description:
        "Modelul nostru prioritizeaza reducerea riscului pentru proprietar, mentinand totodata o experienta stabila zi de zi pentru chiriasi.",
      landlordHeading: "Pentru proprietari",
      renterHeading: "Pentru chiriasi",
      landlordPoints: [
        {
          title: "Mai putine zone operationale neclare",
          description:
            "Verificarile independente si regulate inseamna mai putine surprize si decizii de inchiriere mai bune.",
        },
        {
          title: "Raspuns mai rapid la probleme",
          description:
            "Solicitarile de reparatie trec printr-un proces gestionat, nu prin coordonare ad-hoc.",
        },
        {
          title: "Semnale de risc mai devreme",
          description:
            "Problemele legate de plata utilitatilor sunt semnalate din timp, pentru interventie inainte de intreruperi.",
        },
      ],
      renterPoints: [
        {
          title: "Asteptari clare",
          description:
            "Procesele si programarile definite reduc incertitudinea si sustin o inchiriere mai lina.",
        },
        {
          title: "Suport structurat",
          description:
            "Gestionarea reparatiilor si comunicarea urmeaza un canal fiabil, nu schimburi informale.",
        },
      ],
    },
    faq: {
      title: "Intrebari frecvente",
      description:
        "Raspunsuri la cele mai comune intrebari ale proprietarilor inainte de onboarding.",
      items: [
        {
          question: "Cat de des faceti verificari de proprietate si chirias?",
          answer:
            "Cadenta este flexibila. O stabilim impreuna cu proprietarul si chiriasul la onboarding si o putem ajusta pe masura ce conditiile inchirierii se schimba.",
        },
        {
          question: "Ce anume verificati exact?",
          answer:
            "Verificam identitatea chiriasului si documentatia esentiala, apoi verificam starea apartamentului pentru a stabili un reper operational comun.",
        },
        {
          question: "Cum gestionati reparatiile apartamentului?",
          answer:
            "Coordonam procesul de reparatie, urmarim progresul si comunicam actualizari pentru a mentine ambele parti aliniate pana la rezolvare.",
        },
        {
          question: "Ce monitorizare a utilitatilor oferiti?",
          answer:
            "Monitorizam statusul platilor la utilitati si notificam rapid proprietarii cand apar plati intarziate sau tipare de risc.",
        },
        {
          question: "Cum comunicam cu echipa voastra?",
          answer:
            "Comunicarea este organizata prin canalele agreate, cu actualizari concise de status si cai clare de escaladare pentru urgente.",
        },
      ],
    },
    finalCta: {
      title: "Vrei sa-ti protejezi operatiunile de inchiriere?",
      description:
        "Discuta cu Property Guardian pentru a defini cadenta de supraveghere si pentru a porni rapid.",
      primaryCta: "Contacteaza-ne",
      responseTime: "Timp tipic de raspuns: in maximum o zi lucratoare.",
    },
    footer: {
      companyLine: "Property Guardian | Supraveghere intre proprietari si chiriasi",
      rights: `(c) ${new Date().getFullYear()} Property Guardian. Toate drepturile rezervate.`,
      reachOutLabel: "Contacteaza-ne",
      bookCallLabel: "Programeaza un apel scurt",
      privacyLabel: "Confidentialitate",
      termsLabel: "Termeni",
    },
  },
};

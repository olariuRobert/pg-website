import type { ServiceIconName } from "@/types/site";

type ServiceIconProps = {
  name: ServiceIconName;
};

const sharedProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ServiceIcon({ name }: ServiceIconProps) {
  switch (name) {
    case "tenant":
      return (
        <svg {...sharedProps}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
          <path d="m15 11 2 2 4-4" />
        </svg>
      );

    case "apartment":
      return (
        <svg {...sharedProps}>
          <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
          <path d="M16 9h2a2 2 0 0 1 2 2v10" />
          <path d="M8 7h2M8 11h2M12 7h2M12 11h2" />
          <path d="M10 21v-4h2v4" />
        </svg>
      );

    case "cadence":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
          <path d="M4 4l2 2" />
        </svg>
      );

    case "repairs":
      return (
        <svg {...sharedProps}>
          <path d="m14.5 5.5 4 4" />
          <path d="m5 19 4.5-1 8-8a2.8 2.8 0 1 0-4-4l-8 8L5 19Z" />
        </svg>
      );

    case "utilities":
      return (
        <svg {...sharedProps}>
          <path d="M13 2 6 14h5l-1 8 7-12h-5z" />
        </svg>
      );

    default:
      return null;
  }
}

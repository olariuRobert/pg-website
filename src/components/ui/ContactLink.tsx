"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackContactCtaClick, type ContactCtaSource } from "@/lib/analytics";

type ContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  source: ContactCtaSource;
};

const isExternalHref = (href: string) => /^https?:\/\//.test(href);

export function ContactLink({
  source,
  href,
  onClick,
  target,
  rel,
  children,
  ...props
}: ContactLinkProps) {
  const safeHref = href ?? "#";
  const external = isExternalHref(safeHref);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackContactCtaClick(source);
    onClick?.(event);
  };

  return (
    <a
      {...props}
      href={safeHref}
      onClick={handleClick}
      target={target ?? (external ? "_blank" : undefined)}
      rel={rel ?? (external ? "noopener noreferrer" : undefined)}
    >
      {children}
    </a>
  );
}

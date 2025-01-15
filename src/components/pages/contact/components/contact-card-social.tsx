import { ReactNode } from "react";

interface ContactCardSocialProps {
  href: string;
  children: ReactNode;
}

export default function ContactCardSocial({
  href,
  children,
}: ContactCardSocialProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-muted/80 transition-colors"
    >
      {children}
    </a>
  );
}

import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export function Text({ children }: TextProps) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

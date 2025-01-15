import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return <span className="font-medium">{children}</span>;
}

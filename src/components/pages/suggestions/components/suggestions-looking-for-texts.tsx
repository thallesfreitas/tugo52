import { ReactNode } from "react";

interface SuggestLookingForTextProps {
  children: ReactNode;
}
export default function SuggestLookingForText({
  children,
}: SuggestLookingForTextProps) {
  return (
    <li className="flex gap-2">
      <span className="text-primary">•</span>
      <span>{children}</span>
    </li>
  );
}

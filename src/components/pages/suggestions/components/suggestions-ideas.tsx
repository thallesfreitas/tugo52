"use client";

import { ReactNode } from "react";

interface SuggestionIdeasProps {
  children: ReactNode;
}

export function SuggestionIdeas({ children }: SuggestionIdeasProps) {
  return <li>{children}</li>;
}

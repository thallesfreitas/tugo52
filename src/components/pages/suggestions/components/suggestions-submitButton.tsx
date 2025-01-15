"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

interface SubmitButtonProps {
  children: ReactNode;
}

export default function SubmitButton({ children }: SubmitButtonProps) {
  const t = useTranslations("common.cta");
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {t("sending")}...
        </>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
}

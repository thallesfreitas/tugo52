"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import SubmitButton from "./components/suggestions-submitButton";
import { useTranslations } from "next-intl";
import { TextaAreaWithTitle } from "@/components/ui/textarea-with-title";
import Form from "next/form";
import { Title } from "@/components/ui/Title";
import { Lightbulb } from "lucide-react";

export function SuggestionForm() {
  const t = useTranslations("suggest.form");
  return (
    <Form action="/api/suggestions">
      <Card>
        <CardContent className="pt-6 space-y-6">
          <TextaAreaWithTitle
            name="title"
            placeholder={t("placeholder_title")}
            minLength={3}
            maxLength={100}
          >
            <Title>{t("title")}</Title>
          </TextaAreaWithTitle>

          <TextaAreaWithTitle
            name="problem"
            placeholder={t("placeholder_problem")}
          >
            <Title>{t("problem")}</Title>
          </TextaAreaWithTitle>

          <TextaAreaWithTitle
            name="innovation"
            placeholder={t("placeholder_innovation")}
          >
            <Title>{t("innovation")}</Title>
          </TextaAreaWithTitle>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <SubmitButton>
            <Lightbulb className="mr-2 h-4 w-4" />
            {t("submit.text")}
          </SubmitButton>
          <p className="text-sm text-muted-foreground text-center">
            {t("accept")}
          </p>
        </CardFooter>
      </Card>
    </Form>
  );
}

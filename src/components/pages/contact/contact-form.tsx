"use client";

import { Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import Form from "next/form";
import { useTranslations } from "next-intl";
import SubmitButton from "../suggestions/components/suggestions-submitButton";
import { TextaAreaWithTitle } from "@/components/ui/textarea-with-title";
import { Title } from "@/components/ui/Title";
import { InputWithTitle } from "@/components/ui/input-with-title";
import { ContactSelectSubject } from "./components/contact-select-subject";

export function ContactForm() {
  const t = useTranslations("contact.form");
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">{t("title")}</h2>
      <Form action="/api/contact">
        <div className="space-y-6 flex justify-center flex-col">
          <div className="grid grid-cols-2 gap-4">
            <InputWithTitle name="name" placeholder={t("name")}>
              <Title>{t("name")}</Title>
            </InputWithTitle>

            <InputWithTitle name="email" placeholder={t("placeholder_email")}>
              <Title>{t("email")}</Title>
            </InputWithTitle>
          </div>
          <ContactSelectSubject />

          <TextaAreaWithTitle
            name="message"
            placeholder={t("placeholder_message")}
          >
            <Title>{t("message")}</Title>
          </TextaAreaWithTitle>

          <SubmitButton>
            <Send className="mr-2 h-4 w-4" />
            {t("submit.text")}
          </SubmitButton>
        </div>
      </Form>
    </Card>
  );
}

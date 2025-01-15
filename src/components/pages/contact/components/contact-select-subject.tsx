"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
export function ContactSelectSubject() {
  const t = useTranslations("contact.form");
  return (
    <div className="space-y-2">
      <Label htmlFor="subject">{t("subject")}</Label>
      <Select name="subject" required>
        <SelectTrigger>
          <SelectValue placeholder={t("subject_placeholder")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="suggestion">{t("subjects.suggestion")}</SelectItem>
          <SelectItem value="collaboration">
            {t("subjects.collaboration")}
          </SelectItem>
          <SelectItem value="feedback">{t("subjects.feedback")}</SelectItem>
          <SelectItem value="other">{t("subjects.other")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

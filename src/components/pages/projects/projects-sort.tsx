"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";

export function ProjectsSort() {
  const t = useTranslations("projects.filters.byOrder");
  const [selectedSort, setSelectedSort] = React.useState<string | undefined>();

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
    console.log(`Selected: ${value}`);
    // This will be used with this integrated to API
    console.log(selectedSort);
  };
  return (
    <Select defaultValue="recent" onValueChange={handleSortChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t("orderBy")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-white">
          <SelectLabel>{t("orderBy")}</SelectLabel>
          <SelectItem value="recent">{t("recent")} </SelectItem>
          <SelectItem value="oldest">{t("oldest")} </SelectItem>
          <SelectItem value="name">{t("name")}</SelectItem>
          <SelectItem value="complexity">{t("complexity")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

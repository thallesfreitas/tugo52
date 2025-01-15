"use client";

import * as React from "react";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommandList } from "cmdk";
import { useTranslations } from "next-intl";

const techFilters = [
  { label: "Next.js", value: "nextjs" },
  { label: "React", value: "react" },
  { label: "TypeScript", value: "typescript" },
  { label: "Node.js", value: "nodejs" },
  { label: "Tailwind", value: "tailwind" },
];

export function ProjectsFilter() {
  const t = useTranslations("projects.filters.byTech");
  const [open, setOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelectedTech((prev) => {
      const isSelected = prev.includes(value);
      if (isSelected) {
        return prev.filter((item) => item !== value);
      }
      return [...prev, value];
    });
    setOpen(true);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between min-w-[200px]"
        >
          {selectedTech.length > 0
            ? `${selectedTech.length} ${
                selectedTech.length === 1
                  ? t("commons.selected")
                  : t("commons.selected2")
              }`
            : t("technology")}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white">
        <Command>
          <CommandInput placeholder={t("searchtech")} />
          <CommandEmpty>{t("notfoundtech")}.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {techFilters.map((tech) => (
                <CommandItem
                  key={tech.value}
                  value={tech.value}
                  onSelect={() => handleSelect(tech.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedTech.includes(tech.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {tech.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

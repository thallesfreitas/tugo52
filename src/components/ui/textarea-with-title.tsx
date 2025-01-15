"use client";

import { Label } from "@/components/ui/label";
import { ReactNode } from "react";
import { Textarea } from "./textarea";

interface TextAreaWithTitleProps {
  name: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  children: ReactNode;
}

export function TextaAreaWithTitle({
  name,
  placeholder,
  required = true,
  minLength = 20,
  maxLength = 280,
  children,
}: TextAreaWithTitleProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name} className="text-base">
        {children}
      </Label>
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        className="min-h-[150px]"
      />
    </div>
  );
}

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

interface InputWithTitleProps {
  name: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  children: ReactNode;
}

export function InputWithTitle({
  name,
  placeholder,
  required = true,
  minLength = 20,
  maxLength = 280,
  children,
}: InputWithTitleProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name} className="text-base">
        {children}
      </Label>
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
}

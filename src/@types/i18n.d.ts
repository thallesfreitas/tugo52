import { Locale } from "./common";

export type LocalizedContent<T> = Record<Locale, T>;

export interface Translation {
  [key: string]: string | Translation;
}

// import { getRequestConfig } from "next-intl/server";
// import { routing } from "./routing";
// import { Locale } from "@/@types";

// export default getRequestConfig(async ({ requestLocale }) => {
//   let locale = await requestLocale;
//   if (!locale || !routing.locales.includes(locale as Locale)) {
//     locale = routing.defaultLocale;
//   }

//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default,
//   };
// });

import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Locale } from "@/@types";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment.
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

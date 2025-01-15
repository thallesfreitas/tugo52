"use server";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme/theme-provider";

import { inter, jetbrainsMono } from "@/lib/fonts";
import type { Params } from "next/dist/server/request/params";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import "../globals.css";

export default async function LocaleLayoutServer({
  params,
  children,
}: {
  params: Params;
  children: React.ReactNode;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale as string} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-background`}
      >
        <NextIntlClientProvider locale={locale as string} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col ">
              <Header />
              <main className="flex-1 container py-8 ">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

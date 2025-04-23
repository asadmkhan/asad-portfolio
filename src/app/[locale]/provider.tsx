"use client";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: any;
  children: ReactNode;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

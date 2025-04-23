"use client";
import { ReactNode } from "react";
import { NextIntlClientProvider, Messages } from "next-intl";

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Messages;
  children: ReactNode;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

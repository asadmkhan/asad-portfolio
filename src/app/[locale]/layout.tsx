import "../../globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { LocaleProvider } from "./provider";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return ["en", "de", "es", "fr", "it", "ar"].map((locale) => ({ locale }));
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${params.locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocaleProvider locale={params.locale} messages={messages}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}

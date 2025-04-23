import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Static locale generation for build-time
export async function generateStaticParams() {
  return ["en", "de", "es", "fr", "it", "ar"].map((locale) => ({ locale }));
}


// ✅ Define props outside the layout
interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

// ✅ Layout itself is not async
export default function LocaleLayout({ children, params }: LayoutProps) {
  return (
    <LocaleLayoutInner locale={params.locale}>{children}</LocaleLayoutInner>
  );
}

// ✅ Inner async wrapper handles message loading
async function LocaleLayoutInner({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

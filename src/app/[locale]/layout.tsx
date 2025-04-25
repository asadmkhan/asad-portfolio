import "../../globals.css";
import { notFound } from "next/navigation";
import { LocaleProvider } from "./provider";
import type { ReactNode } from "react";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
      <head>
        {/* ✅ Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JH28EZ69WV"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JH28EZ69WV');
            `,
          }}
        />
      </head>
      <body 
        className={`${inter.variable} antialiased`}
      >
        <LocaleProvider locale={params.locale} messages={messages}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}

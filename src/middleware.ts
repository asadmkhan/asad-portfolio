import createMiddleware from 'next-intl/middleware';

const PUBLIC_LOCALES = ['en', 'de', 'es', 'fr', 'it', 'ar'];
const DEFAULT_LOCALE = 'en';

export default createMiddleware({
  locales: PUBLIC_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: true // ✅ This uses browser language
});

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)']
};

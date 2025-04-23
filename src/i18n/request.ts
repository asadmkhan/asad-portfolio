import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const fallback = locale ?? 'en'; // ✅ prevent crash on undefined

  return {
    locale: fallback,
    messages: (await import(`@/messages/${fallback}.json`)).default
  };
});

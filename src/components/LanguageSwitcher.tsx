'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

const supportedLocales = ['en', 'de', 'es', 'fr', 'it', 'ar'];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const currentLocale = pathname.split('/')[1];
  const restOfPath = pathname.split('/').slice(2).join('/');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const newPath = `/${nextLocale}/${restOfPath}`;
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded shadow px-2 py-1 text-sm">
      <select
        value={currentLocale}
        onChange={handleChange}
        className="outline-none bg-transparent"
      >
        {supportedLocales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

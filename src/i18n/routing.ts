import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ms', 'iba', 'zh'],
  defaultLocale: 'en'
});

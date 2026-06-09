import { defaultLang, type SupportedLocale } from './ui';
import { en } from './translations/en';
import { de } from './translations/de';
import { fr } from './translations/fr';
import { es } from './translations/es';
import { it } from './translations/it';
import { nl } from './translations/nl';
import { pl } from './translations/pl';
import { pt } from './translations/pt';
import { ru } from './translations/ru';
import { zh } from './translations/zh';
import { sv } from './translations/sv';
import { da } from './translations/da';
import { no } from './translations/no';
import { fi } from './translations/fi';
import type { TranslationSchema } from './types';

const translations: Record<SupportedLocale, TranslationSchema> = {
  en,
  de,
  fr,
  es,
  it,
  nl,
  pl,
  pt,
  ru,
  zh,
  sv,
  da,
  no,
  fi,
};

export function useTranslations(lang: string | undefined) {
  const locale = (lang && lang in translations ? lang : defaultLang) as SupportedLocale;
  const dict = translations[locale];
  const defaultDict = translations[defaultLang];

  return function t(key: string): any {
    const keys = key.split('.');
    
    // Attempt to resolve in requested locale
    let value: any = dict;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }

    if (value !== undefined && value !== null && value !== '') {
      return value;
    }

    // Fallback to default locale (English)
    let fallbackValue: any = defaultDict;
    for (const k of keys) {
      if (fallbackValue && typeof fallbackValue === 'object' && k in fallbackValue) {
        fallbackValue = fallbackValue[k];
      } else {
        fallbackValue = undefined;
        break;
      }
    }

    return fallbackValue ?? key;
  };
}

/**
 * Helper to get clean relative path without locale prefix
 */
export function getCleanPath(pathname: string): string {
  const pathParts = pathname.split('/').filter(Boolean);
  const localeKeys = Object.keys(translations);
  if (pathParts.length > 0 && localeKeys.includes(pathParts[0])) {
    pathParts.shift(); // remove locale prefix
  }
  return pathParts.join('/');
}

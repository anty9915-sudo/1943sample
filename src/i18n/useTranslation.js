import { useLanguage } from './useLanguage'
import { ko } from './dictionaries/ko'
import { en } from './dictionaries/en'
import { ja } from './dictionaries/ja'
import { zh } from './dictionaries/zh'

const DICTIONARIES = { ko, en, ja, zh }

function resolve(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}

export function useTranslation() {
  const { language, setLanguage } = useLanguage()
  const dict = DICTIONARIES[language] || DICTIONARIES.ko

  function t(key) {
    const value = resolve(dict, key)
    if (value !== undefined) return value
    const fallback = resolve(DICTIONARIES.ko, key)
    return fallback !== undefined ? fallback : key
  }

  function formatPrice(price) {
    const { prefix, suffix } = t('common.currency')
    return `${prefix}${price}${suffix}`
  }

  return { t, language, setLanguage, formatPrice }
}

import { useEffect, useState } from 'react'
import { LanguageContext, STORAGE_KEY } from './context'
import { LANGUAGES } from './languages'

const LANGUAGE_CODES = LANGUAGES.map((l) => l.code)

function getInitialLanguage() {
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return LANGUAGE_CODES.includes(saved) ? saved : 'ko'
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  function setLanguage(code) {
    if (LANGUAGE_CODES.includes(code)) setLanguageState(code)
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

'use client'

import { createContext, useContext } from 'react'
import { type Lang, type Translations, t } from '@/lib/i18n'

interface LangContextValue {
  lang: Lang
  tr: Translations
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  tr: t.en,
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  return (
    <LangContext.Provider value={{ lang: 'en', tr: t.en }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

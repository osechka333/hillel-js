import { createContext, useContext, useState } from 'react'

const DEFAULT_LANG = 'en'
const UA_LANG = 'ua'
export const LangContext = createContext(DEFAULT_LANG)

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider ({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG)

  function toggleLang () {
    setLang(lang === DEFAULT_LANG ? UA_LANG : DEFAULT_LANG)
  }

  function t7e (en, ua) {
    return lang === UA_LANG ? ua : en
  }

  const contextValue = { lang, toggleLang, t7e };

  return (
    <LangContext.Provider value={contextValue}>
      {children}
    </LangContext.Provider>
  )
}
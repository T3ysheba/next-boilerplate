import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ELanguage } from '@/types'

const useLanguageTranslation = () => {
  const { i18n } = useTranslation()

  const onLanguageChangeCallback = useCallback(
    (language: string) => {
      i18n.changeLanguage(language)
    },
    [i18n]
  )

  return {
    language: i18n.language as ELanguage,
    isUkrainian: i18n.language === 'uk',
    onLanguageChangeCallback,
  }
}
export default useLanguageTranslation

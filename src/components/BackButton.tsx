'use client'

import { useTranslations } from "next-intl"
import React from "react"

export default function BackButton() {
  const t = useTranslations('Button')

  return (
    <button className="mb-10">
      {t('back')}
    </button>
  )
}
'use client'

import React from "react"
import { useTranslations } from 'next-intl'

export default function Menu() {
  const t = useTranslations('Menu')

  return (
    <div className="flex justify-center space-x-5 font-bold text-xl mb-10">
      <button onClick={() => { }}>
        {t('now_showing')}
      </button>
      <button className="opacity-50">
        {t('coming_soon')}
      </button>
    </div>
  )
}
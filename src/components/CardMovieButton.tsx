'use client'

import React from "react"
import { useTranslations } from 'next-intl'

export default function CardMovieButton() {
  const t = useTranslations('CardMovie')
  
  return (
    <div className="w-2/3 py-1 bg-white text-black text-center rounded-full">
      {t('more_info')}
    </div>
  )
}
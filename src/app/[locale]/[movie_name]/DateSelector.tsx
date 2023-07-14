import React from "react"
import { Booking } from "./SelectSession"
import { useTranslations } from "next-intl"

export default function DateSelector({ detail, booking, updateDate, updateTheater, updateTime }: { detail: any, booking: Booking, updateDate: ({ date }: { date: string }) => void, updateTheater: ({ theater }: { theater: string }) => void, updateTime: ({ time }: { time: string }) => void }) {
  const { theatre: theatreMovie, time: timeMovie } = detail
  const { date, theater } = booking

  const t = useTranslations('SelectShow')

  return (
    <div className="md:flex md:text-center space-y-4 md:space-y-0">
      <div className="w-full md:w-1/3">
        <div className="font-bold">{t('select_date')}</div>
        <input
          type="date"
          onChange={(e) => updateDate({ date: e.target.value })}
          className="bg-transparent w-full rounded-xl border border-white text-center p-2"
          style={{ colorScheme: "dark" }} />
      </div>
      <div className="w-full md:w-1/3 md:mx-4 flex flex-col">
        <div className="font-bold">{t('select_theatre')}</div>
        <select
          disabled={date === ''}
          onChange={(e) => updateTheater({ theater: e.target.value })}
          className="flex-grow min-h-0 bg-transparent w-full rounded-xl border border-white text-center p-2 disabled:opacity-50">
          <option>-</option>
          {theatreMovie.map((item: string) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="w-full md:w-1/3 flex flex-col">
        <div className="font-bold">{t('select_time')}</div>
        <select
          disabled={theater === '-'}
          onChange={(e) => updateTime({ time: e.target.value })}
          className="flex-grow min-h-0 bg-transparent w-full rounded-xl border border-white text-center p-2 disabled:opacity-50">
          <option>-</option>
          {timeMovie.map((item: string) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
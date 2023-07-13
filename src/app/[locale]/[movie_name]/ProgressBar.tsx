import React from "react"

export enum PROGRESS_ENUM {
  SELECT_DATE = 'Select Showtime',
  SELECT_SEATS = 'Select Seats',
  BUY = 'Buy',
}

export const PROGRESS = [PROGRESS_ENUM.SELECT_DATE, PROGRESS_ENUM.SELECT_SEATS, PROGRESS_ENUM.BUY]

export default function ProgressBar({ progress }: { progress: PROGRESS_ENUM[]}) {
  return (
    <div className="flex my-7 rounded-xl border border-white overflow-hidden">
      {PROGRESS.map((item, index) => (
        <div key={index} className={`relative self-center text-center w-1/3 py-4 h-[64px] sm:h-[56px] ${progress.includes(item) ? 'bg-white' : ''}`}>
          <div className={`text-xs md:text-base font-bold ${progress.includes(item) ? 'text-black' : 'text-white'}`}>{item}</div>
          {index !== PROGRESS.length - 1 && (
            <div 
              className={`absolute left-full top-0 w-0 h-0 border-t-[32px] sm:border-t-[28px] border-b-[32px] sm:border-b-[28px] border-transparent ${progress.includes(item) && 'border-l-white border-l-[32px] sm:border-l-[28px]'}`} />
          )}
        </div>
      ))}
    </div>
  )
}
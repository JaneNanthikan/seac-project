import React from "react"

export enum PROGRESS_ENUM {
  SELECT_DATE = 'Select Showtime',
  SELECT_SEATS = 'Select Seats',
  BUY = 'Buy',
}

export const PROGRESS = [PROGRESS_ENUM.SELECT_DATE, PROGRESS_ENUM.SELECT_SEATS, PROGRESS_ENUM.BUY]

export default function ProgressBar({ progress }: { progress: PROGRESS_ENUM[]}) {
  return (
    <div className="flex my-6 rounded-xl border border-white overflow-hidden">
      {PROGRESS.map((item, index) => (
        <div key={index} className={`relative text-center w-1/3 py-3 ${progress.includes(item) ? 'bg-white' : ''}`}>
          <div className={`font-bold ${progress.includes(item) ? 'text-black' : 'text-white'}`}>{item}</div>
          {index !== PROGRESS.length - 1 && (
            <div 
              className={`absolute left-full top-0 w-0 h-0`} 
              style={{borderTop: "24px solid transparent", borderBottom: "24px solid transparent", borderLeft: `${progress.includes(item) && '24px solid'}`}} />
          )}
        </div>
      ))}
    </div>
  )
}
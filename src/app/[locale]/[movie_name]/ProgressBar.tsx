import React from "react"

const PROGRESS = [{SelectShowtime: 'Select Showtime'}, {SelectSeats: 'Select Seats'}, {Buy: 'Buy'}]

export default function ProgressBar() {
  return (
    <div className="flex my-6 rounded-xl border border-white overflow-hidden">
      {PROGRESS.map((item, index) => (
        <div key={index} className={`relative text-center w-1/3 py-3 ${index === 0 ? 'bg-white' : ''}`}>
          <div className={`font-bold ${index === 0 ? 'text-black' : 'text-white'}`}>{Object.values(item)}</div>
          {index !== PROGRESS.length - 1 && (
            <div 
              className={`absolute right-100 top-0 w-0 h-0 ${index === 0 ? 'border-l-white' : ''}`} 
              style={{borderTop: "24px solid transparent", borderBottom: "24px solid transparent", borderLeft: '24px solid'}} />
          )}
        </div>
      ))}
    </div>
  )
}
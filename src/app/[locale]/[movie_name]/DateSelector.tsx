import React from "react"
import { Booking } from "./SelectSession"

export default function DateSelector({booking, updateDate, updateTheater, updateTime}: {booking: Booking, updateDate: ({date}: {date: string}) => void, updateTheater: ({theater}: {theater: string}) => void, updateTime: ({time}: {time: string}) => void}) {
  const { date, theater, time } = booking

  return (
    <div className="flex text-center">
      <div className="w-1/3">
        <div className="font-bold">Select Date</div>
        <input 
          type="date" 
          onChange={(e) => updateDate({date: e.target.value})}
          className="bg-transparent w-full rounded-xl border border-white text-center p-2" 
          style={{colorScheme: "dark"}} />
      </div>
      <div className="w-1/3 mx-4 flex flex-col">
        <div className="font-bold">Select Theatre</div>
        <select 
          onChange={(e) => updateTheater({theater: e.target.value})}
          className="flex-grow min-h-0 bg-transparent w-full rounded-xl border border-white text-center p-2">
          <option>-</option>
          <option>Theatre 1</option>
          <option>Theatre 2</option>
          <option>Theatre 3</option>
        </select>
      </div>
      <div className="w-1/3 flex flex-col">
        <div className="font-bold">Select Time</div>
        <select 
          onChange={(e) => updateTime({time: e.target.value})}
          className="flex-grow min-h-0 bg-transparent w-full rounded-xl border border-white text-center p-2">
          <option>-</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>12:00</option>
        </select>
      </div>
    </div>
  )
}
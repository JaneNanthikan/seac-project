import React from "react"

export default function DateSelector() {
  return (
    <div className="flex text-center">
      <div className="w-1/3">
        <div className="font-bold">Select Date</div>
        <input type="date" className="bg-transparent w-full rounded-xl border border-white text-center p-2" style={{colorScheme: "dark"}} />
      </div>
      <div className="w-1/3 mx-4 flex flex-col">
        <div className="font-bold">Select Theatre</div>
        <select className="flex-grow min-h-0 bg-transparent w-full rounded-xl border border-white text-center p-2">
          <option>1</option>
        </select>
      </div>
      <div className="w-1/3 flex flex-col">
        <div className="font-bold">Select Time</div>
        <select className="flex-grow min-h-0 bg-transparent w-full rounded-xl border border-white text-center p-2">
          <option>1</option>
        </select>
      </div>
    </div>
  )
}
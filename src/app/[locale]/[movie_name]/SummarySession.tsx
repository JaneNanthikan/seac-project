import React from "react"
import { Booking } from "./SelectSession"
import { PROGRESS_ENUM } from "./ProgressBar"

export default function SummarySession({booking, progress}: {booking: Booking, progress: PROGRESS_ENUM[]}) {
  const {date, theater, time, seats} = booking
  const seatsString = seats.join(", ")
  const totalPrice = seats.length * 300

  const enableButton = progress.includes(PROGRESS_ENUM.BUY)

  return (
    <div>
      <h1 className="text-center text-2xl uppercase font-bold my-3">Summary</h1>
      <div className="rounded-xl border border-white p-4 flex">
        <img src="doraemon.png" className="w-32" />
        <div className="flex justify-between w-full font-bold">
          <div className="w-5/6 p-6 space-y-5">
            <h2 className="text-xl font-bold uppercase">Doraemon the movie 2021</h2>
            <div className="flex space-x-10">
              <div>
                <span>Showtime</span>
                <span>Date:</span>
                <span>{date}</span>
              </div>
              <div>
                <span>Theatre : </span>
                <span>{theater}</span>
              </div>
              <div>
                <span>Time : </span>
                <span>{time}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span>Seats : </span>
                <span>{seatsString}</span>
              </div>
              <div>
                <span>
                  Total Price :
                </span>
                <span>
                  {totalPrice === 0 ? "-" : `${totalPrice} THB`}
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/6 h-full flex justify-center items-center">
            <button 
              disabled={!enableButton} 
              className="w-full bg-warning text-black font-bold rounded-xl px-4 py-2 disabled:text-white disabled:bg-transparent disabled:border-white disabled:border">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
import React from "react"
import { Booking } from "./SelectSession"
import { PROGRESS_ENUM } from "./ProgressBar"

export default function SummarySession({detail, booking, progress}: {detail: any, booking: Booking, progress: PROGRESS_ENUM[]}) {
  const {date, theater, time, seats} = booking
  const {title, img} = detail
  const seatsString = seats.join(", ")
  const totalPrice = seats.length * 300

  const enableButton = progress.includes(PROGRESS_ENUM.BUY)

  return (
    <div>
      <h1 className="text-center text-2xl uppercase font-bold my-3">Summary</h1>
      <div className="rounded-xl border border-white p-4 sm:flex">
        <img src={img} className="w-full md:w-32 mb-4 md:mb-0" />
        <div className="block sm:flex justify-between w-full font-bold">
          <div className="w-full md:w-5/6 md:p-6 space-y-5 mb-4 md:mb-0">
            <h2 className="text-xl font-bold uppercase">{title}</h2>
            <div className="md:flex space-y-4 md:space-y-0 md:space-x-10">
              <div>
                <span className="mr-2">Showtime Date:</span>
                <span>{date}</span>
              </div>
              <div>
                <span className="mr-2">Theatre:</span>
                <span>{theater}</span>
              </div>
              <div>
                <span className="mr-2">Time:</span>
                <span>{time}</span>
              </div>
            </div>
            <div className="md:flex justify-between space-y-4 md:space-y-0">
              <div>
                <span className="mr-2">Seats : </span>
                <span>{seatsString}</span>
              </div>
              <div>
                <span className="mr-2">
                  Total Price :
                </span>
                <span>
                  {totalPrice === 0 ? "-" : `${totalPrice} THB`}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/6 h-full flex justify-center items-center">
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
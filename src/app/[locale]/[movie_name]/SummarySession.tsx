import React from "react"

export default function SummarySession() {
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
                <span>Date: 05/10/2022</span>
              </div>
              <div>
                <span>Theatre : </span>
                <span>Theatre 1</span>
              </div>
              <div>
                <span>Time : </span>
                <span>11 : 30</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span>Seats : </span>
                <span>A3, A4</span>
              </div>
              <div>
                <span>
                  Total Price :
                </span>
                <span>
                  600 THB
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/6 h-full flex justify-center items-center">
            <button className="w-full bg-warning text-black font-bold rounded-xl px-4 py-2">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
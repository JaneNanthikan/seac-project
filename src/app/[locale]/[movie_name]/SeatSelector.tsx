import React from "react"
import { Booking } from "./SelectSession"

const SEAT_COUNT = 10

export default function SeatSelector({booking, addSeats, removeSeats}: {booking: Booking, addSeats: ({seats}: {seats: string}) => void, removeSeats: ({seats}: {seats: string}) => void}) {
  const {seats} = booking
  const Seats = ({character}: {character: string}) => {
    const _seats = []
    for (let i = 0; i < SEAT_COUNT; i++) {
      const _img = seats.includes(character + i) ? "/check.png" : "/green_chair.png"

      _seats.push(
        <button 
          key={i} 
          onClick={() => {
          if (seats.includes(character + i)) {
            removeSeats({seats: character + i})
          } else {
            addSeats({seats: character + i})
          }}}
          >
          <img className="w-1/10 h-10" src={_img} />
        </button>
      )
    }

    return (
      <div className="flex justify-around items-center">
        <div className="font-bold text-2xl">{character}</div>
          {_seats}
        <div className="font-bold text-2xl">{character}</div>
      </div>
    )
  }
  
  return (
    <div>
      <div className="w-full bg-warning font-bold py-3 text-center text-2xl my-7">SCREEN</div>
      <div className="flex items-center justify-center">
        <div className="w-5/6 space-y-4">
          <Seats character="E" />
          <Seats character="D" />
          <Seats character="C" />
          <Seats character="B" />
          <Seats character="A" />
          <hr className="w-full" />
        </div>
      </div>
    </div>
  )
}
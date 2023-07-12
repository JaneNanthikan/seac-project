import React from "react"

const SEAT_COUNT = 10

export default function SeatSelector() {

  const Seats = ({character}: {character: string}) => {
    const seats = []
    for (let i = 0; i < SEAT_COUNT; i++) {
      seats.push(<img key={i} className="w-1/10 h-10" src="green_chair.png" />)
    }

    return (
      <div className="flex justify-around items-center">
        <div className="font-bold text-2xl">{character}</div>
          {seats}
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
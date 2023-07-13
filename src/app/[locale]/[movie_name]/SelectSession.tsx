"use client"

import React, { useState } from "react"
import ProgressBar, { PROGRESS_ENUM } from "./ProgressBar"
import DateSelector from "./DateSelector"
import SeatSelector from "./SeatSelector"
import SummarySession from "./SummarySession"

export interface Booking {
  date: string
  theater: string
  time: string
  seats: string[]
}

function useBooking() {
  const [booking, setBooking] = useState<Booking>({
    date: '',
    theater: '-',
    time: '-',
    seats: [],
  })
  const [progress, setProgress] = useState<PROGRESS_ENUM[]>([PROGRESS_ENUM.SELECT_DATE])

  function updateDate({ date }: { date: string }) {
    setBooking({ ...booking, date })
  }

  function updateTheater({ theater }: { theater: string }) {
    setBooking({ ...booking, theater })
  }

  function updateTime({ time }: { time: string }) {
    setBooking({ ...booking, time })

    const _progress = [...progress]
    _progress.push(PROGRESS_ENUM.SELECT_SEATS)
    setProgress(_progress)
  }

  function addSeats({ seats }: { seats: string }) {
    let _seats: string[] = [...booking.seats]
    _seats.push(seats)

    setBooking({ ...booking, seats: _seats })

    if (!progress.includes(PROGRESS_ENUM.BUY) && _seats.length > 0) {
      const _progress = [...progress]
      _progress.push(PROGRESS_ENUM.BUY)
      setProgress(_progress)
    }
  }

  function removeSeats({ seats }: { seats: string }) {
    let _seats: string[] = [...booking.seats]
    _seats = _seats.filter((seat) => seat !== seats)

    if (_seats.length === 0) {
      const _progress = [...progress]
      _progress.pop()
      setProgress(_progress)
    }

    setBooking({ ...booking, seats: _seats })
  }

  return {
    booking,
    progress,
    updateDate,
    updateTheater,
    updateTime,
    addSeats,
    removeSeats,
  }
}

export default function SelectSession({ detail }: { detail: any }) {
  const {
    booking,
    progress,
    updateDate,
    updateTheater,
    updateTime,
    addSeats,
    removeSeats,
  } = useBooking()

  return (
    <div>
      <ProgressBar progress={progress} />
      <DateSelector detail={detail} booking={booking} updateDate={updateDate} updateTheater={updateTheater} updateTime={updateTime} />
      {progress.includes(PROGRESS_ENUM.SELECT_SEATS) && (
        <>
          <SeatSelector detail={detail} booking={booking} addSeats={addSeats} removeSeats={removeSeats} />
          <SummarySession detail={detail} booking={booking} progress={progress} />
        </>
      )}
    </div>
  )
}
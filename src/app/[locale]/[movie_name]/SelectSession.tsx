"use client"

import React from "react"
import ProgressBar from "./ProgressBar"
import DateSelector from "./DateSelector"
import SeatSelector from "./SeatSelector"
import SummarySession from "./SummarySession"

export default function SelectSession() {
  return (
    <div>
      <ProgressBar />
      <DateSelector />
      <SeatSelector />
      <SummarySession />
    </div>
  )
}
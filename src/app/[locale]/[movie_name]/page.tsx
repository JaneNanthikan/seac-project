import Tag from "@/components/Tag"
import Link from "next/link"
import React from "react"
import SelectSession from "./SelectSession"

const getData = async () => {
  const resp = await fetch('http://localhost:3000/api/movies/detail')
  if (!resp.ok) {
    return {}
  }

  return await resp.json()
}

export default async function MovieDetails() {
  const detail = await getData()
  const { date, title, img, description } = detail
  return (
    <div className="p-5">
      <Link href="/">
        <button className="mb-5">
          Back
        </button>
      </Link>
      <div className="flex">
        <img className="w-full md:w-1/5" src={img} alt={img} />
        <div className="pl-10 space-y-5">
          <p className="text-xs text-secondary font-bold uppercase">{date}</p>
          <p className="text-xl font-bold uppercase">{title}</p>
          <p>{description}</p>
          <div className="flex space-x-4">
            <Tag title="Animation" />
            <Tag title="108 Mins" />
          </div>
        </div>
      </div>
      <SelectSession />
    </div>
  )
}
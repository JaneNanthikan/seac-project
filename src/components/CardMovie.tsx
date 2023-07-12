import React from "react"
import Tag from "./Tag"
import Link from "next/link"

type Prop = {
  photo: string,
  date: string,
  title: string
}

export default function CardMovie({photo, date, title}: Prop) {
  return (
    <div className="space-y-2 font-bold">
      <Link href="/doraemon" className="relative">
        <div className="absolute flex justify-center items-center bg-black/50 rounded-xl w-full h-full opacity-0 hover:opacity-100">
          <div className="w-2/3 py-1 bg-white text-black text-center rounded-full">
            MORE INFO
          </div>
        </div>
        <img src={photo} alt={photo} />
      </Link>
      <p className="text-secondary text-xs uppercase">{date}</p>
      <p className="text-white uppercase">{title}</p>
      <div className="flex flex-wrap">
        <Tag title="Animation" />
        <Tag title="108 Mins" />
      </div>
    </div>
  )


}
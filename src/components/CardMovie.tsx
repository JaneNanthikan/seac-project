import React from "react"
import Link from "next/link"
import Tag from "./Tag"
import CardMovieButton from "./CardMovieButton"

type CardMovieProps = {
  photo: string,
  date: string,
  title: string,
  tags: string[]
}

export default function CardMovie({photo, date, title, tags}: CardMovieProps) {
  return (
    <div className="space-y-2 font-bold">
      <Link href="/doraemon" className="relative">
        <div className="absolute flex justify-center items-center bg-black/50 rounded-2xl w-full h-full opacity-0 hover:opacity-100">
          <CardMovieButton />
        </div>
        <img src={photo} alt={photo} />
      </Link>
      <p className="text-secondary text-xs uppercase">{date}</p>
      <p className="text-white uppercase">{title}</p>
      <div className="flex flex-wrap">
        {tags.map(title => (
          <Tag key={title} title={title} />
        ))}
      </div>
    </div>
  )


}
import Tag from "@/components/Tag"
import Link from "next/link"
import React from "react"
import SelectSession from "./SelectSession"
import BackButton from "@/components/BackButton"

const getData = async () => {
  const resp = await fetch('http://localhost:3000/api/movies/detail')
  if (!resp.ok) {
    return {}
  }

  return await resp.json()
}

export default async function MovieDetails() {
  const detail = await getData()
  const { date, title, img, description, tags } = detail
  return (
    <div>
      <Link href="/">
        <BackButton />
      </Link>
      <div className="md:flex">
        <img className="w-full md:w-2/5 lg:w-1/5 mb-10 md:mb-0" src={img} alt={img} />
        <div className="w-full md:w-3/5 lg:w-4/5 md:pl-10 space-y-5">
          <p className="text-xs text-secondary font-bold uppercase">{date}</p>
          <p className="text-xl font-bold uppercase">{title}</p>
          <p>{description}</p>
          <div className="flex space-x-4">
            {tags.map((tag: string) => (
              <Tag key={tag} title={tag} />
            ))}
          </div>
        </div>
      </div>
      <SelectSession detail={detail} />
    </div>
  )
}
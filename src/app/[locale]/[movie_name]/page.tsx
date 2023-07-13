import Tag from "@/components/Tag"
import Link from "next/link"
import React from "react"
import SelectSession from "./SelectSession"

const details = {
  date: "05 oct 2022",
  title: "DORAEMON THE MOVIE 2022",
  img: "/doraemon.png",
  description: `One day, Nobita picks a small rocket from which a small-sized humanoid alien Papi comes out. He came from the planet named 'Pirika'
  to the Earth to escape from the PCIA army of his planet. At the very beginning, Doraemon and his friends were confused by the small
  size of Papi, but with the gadget "Small Light", they became small and play together. However, the whale-shaped battleship, who
  chased Papi and came to the Earth, attacks Doraemon and Nobita to catch Papi. Papi blames himself for having involved everyone, but
  he tries to fight against the PCIA army. In order to protect Papi and his planet Pirika, Doraemon and his friends go to Pirika.`,
}

export default function MovieDetails() {
  const { date, title, img, description } = details
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
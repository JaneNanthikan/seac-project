import React from "react"
import CardMovie from "@/components/CardMovie"
import Menu from "./Menu"

const getData = async () => {
  const resp = await fetch('http://localhost:3000/api/movies/list')
  if (!resp.ok) {
    return {}
  }

  return await resp.json()
}

export default async function Home() {
  const movieList = await getData()

  return (
    <main>
      <Menu />
      <div className="flex flex-wrap">
        {movieList.map(({ img, date, title, tags }: { img: string, date: string, title: string, tags: string[] }, index: number) => (
          <div key={index} className="w-full sm:w-1/2 xl:w-1/4 px-4 pb-8">
            <CardMovie photo={img} date={date} title={title} tags={tags} />
          </div>
        ))}
      </div>
    </main>
  )
}


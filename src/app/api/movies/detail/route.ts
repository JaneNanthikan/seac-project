import { NextRequest, NextResponse } from "next/server";

const details = {
  date: "05 oct 2022",
  title: "DORAEMON THE MOVIE 2022",
  img: "/doraemon.png",
  description: `One day, Nobita picks a small rocket from which a small-sized humanoid alien Papi comes out. He came from the planet named 'Pirika'
  to the Earth to escape from the PCIA army of his planet. At the very beginning, Doraemon and his friends were confused by the small
  size of Papi, but with the gadget "Small Light", they became small and play together. However, the whale-shaped battleship, who
  chased Papi and came to the Earth, attacks Doraemon and Nobita to catch Papi. Papi blames himself for having involved everyone, but
  he tries to fight against the PCIA army. In order to protect Papi and his planet Pirika, Doraemon and his friends go to Pirika.`,
  tags: ["Animation", "108 Mins"],
  theatre: ['Theatre 1', 'Theatre 2', 'Theatre 3'],
  time: ['10:00', '12:00', '14:00', '16:00'],
  reserved_seats: ['C3', 'C4', 'B9', 'B10']

}

export async function GET(req: NextRequest) {
  return NextResponse.json(details)
}
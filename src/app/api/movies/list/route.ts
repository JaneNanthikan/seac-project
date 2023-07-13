import { NextRequest, NextResponse } from "next/server";

const movieLists = [{
  img: "/doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur",
  tags: ["Animation", "108 Mins"]
}, {
  img: "/doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur",
  tags: ["Animation", "108 Mins"]
}, {
  img: "/doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur",
  tags: ["Animation", "108 Mins"]
}, {
  img: "/doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur",
  tags: ["Animation", "108 Mins"]
}, {
  img: "/doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur",
  tags: ["Animation", "108 Mins"]
}, {
  img: "/doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur",
  tags: ["Animation", "108 Mins"]
}, {
  img: "/doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur",
  tags: ["Animation", "108 Mins"]
}, {
  img: "/doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur",
  tags: ["Animation", "108 Mins"]
}, {
  img: "/doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur",
  tags: ["Animation", "108 Mins"]
}, {
  img: "/doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur",
  tags: ["Animation", "108 Mins"]
}, {
  img: "/doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur",
  tags: ["Animation", "108 Mins"]
}]

export async function GET(req: NextRequest) {
  return NextResponse.json(movieLists)
}
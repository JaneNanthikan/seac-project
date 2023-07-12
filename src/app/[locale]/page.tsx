import CardMovie from "@/components/CardMovie"

const movieLists = [{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
}, {
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
},{
  img: "doraemon.png",
  date: "05 OCT 2022",
  title: "Doraemon: Nobita's New Dinosaur"
}]

export default function Home() {
  return (
    <main>
      <div className="flex justify-center space-x-4 font-bold text-xl my-4">
          <button>
            Now Showing
          </button>
          <button className="opacity-50">
            Coming Soon
          </button>
        </div>
        <div className="flex flex-wrap p-5">
          {movieLists.map(({img, date, title}, index) => (
            <div key={index} className="w-1/2 md:w-1/4 px-2 pb-10">
              <CardMovie photo={img} date={date} title={title} />
            </div>
          ))}
        </div>
    </main>
  )
}

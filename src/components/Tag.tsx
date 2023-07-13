import React from "react"

type TagProp = {
  title: string
}

export default function Tag({title}: TagProp) {
  return (
    <div className="bg-btn_bg text-btn_text font-bold py-2 px-3 rounded-full mr-2 mb-2">
      {title}
    </div>
  )
}
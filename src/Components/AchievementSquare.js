import React from "react"

const AchievementSquare = props => {
  // Accepts date, achievement and a paragraph of text for investment achievements section

  return (
    <div className="heightofbox bg-blue-900 w-full relative">
      <div className="absolute text-tiny left-0 pl-8 pt-8 text-white uppercase tracking-morewider">
        {props.date}
      </div>
      <h1 className="text-white text-6xl absolute pl-8 pt-24 left-0 top-0">
        {props.achievement}
      </h1>
      <div className="absolute opacity-50 text-base w-11/12 bottom-0 pb-8 pl-8 text-white ">
        {props.paragraph}
      </div>
    </div>
  )
}

export default AchievementSquare

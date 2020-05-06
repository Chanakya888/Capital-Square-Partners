import React from "react"
import SubHeading from "../../Components/SubHeading"
import ButtonComponent from "../../Components/ButtonComponent"
import AchievementSquare from "../../Components/AchievementSquare"
import RightArrow from "../../../assets/RightArrow.jpg"
import LeftArrow from "../../../assets/LeftArrow.jpg"

const WhatWeDo = () => {
  let x = 0
  const count = ["#0", "#1", "#2"]
  const countLength = count.length
  const handleIncrement = () => {
    document.getElementById(count[x]).style.display = "none"
    if (x === countLength - 1) {
      x = -1
    }
    x = x + 1
    document.getElementById(count[x]).style.display = "block"
  }
  const handleDecrement = () => {
    document.getElementById(count[x]).style.display = "none"
    if (x === 0) {
      x = countLength
    }
    x = x - 1
    document.getElementById(count[x]).style.display = "block"
  }
  return (
    <div className="pt-32 px-5">
      <SubHeading number="03" title="What we do" color="black" />
      <h2 className="pt-16 ">
        We invest in companies we believe in, which operate in markets we
        understand in depth, and are either already segment leaders or can
        achieve leadership with further capital and operational support.
      </h2>
      <p className="pt-16">
        We typically like to own the businesses in which we invest or have a
        substantial position, either by ourselves or as part of an investor
        consortium. Our investment focus is on businesses that are preferably
        cross border with multi national operations today, or can be enhanced
        across geographies tomorrow.{" "}
      </p>
      <ButtonComponent title="know more about us" color="black" />
      <div className="mt-20">
        <div id="#0">
          <AchievementSquare
            date="april 2020"
            achievement="30Mil"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
          />
        </div>
        <div id="#1" className="hidden">
          <AchievementSquare
            date="april 2020"
            achievement="40Mil"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
          />
        </div>
        <div id="#2" className="hidden">
          <AchievementSquare
            date="april 2020"
            achievement="50Mil"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
          />
        </div>
      </div>
      <div className="mt-8 w-full h-1 rounded-full bg-blue-900"></div>
      <div className="flex justify-between">
        <div className="mt-8 flex justify-start">
          <button
            onClick={() => {
              handleDecrement()
            }}
          >
            <img src={LeftArrow} alt="" />
          </button>
          <button
            onClick={() => {
              handleIncrement()
            }}
          >
            <img src={RightArrow} className="ml-2" alt="" />
          </button>
        </div>
        <div className="text-tiny uppercase mt-8 flex items-center text-blue-900 tracking-morewider">
          Expand +
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo

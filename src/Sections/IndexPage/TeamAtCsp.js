import React from "react"
import SubHeading from "../../Components/SubHeading"
import ButtonComponent from "../../Components/ButtonComponent"
import InvestBanner from "../../Components/InvestBanner"
import RightArrow from "../../assets/RightArrow.jpg"
import LeftArrow from "../../assets/LeftArrow.jpg"

const TeamAtCsp = () => {
  let x = 0
  let countarr1 = ["q1", "q2", "q3"]
  const countArr1Length = countarr1.length
  const handleIncrement = () => {
    document.getElementById(countarr1[x]).style.display = "none"
    if (x === countArr1Length - 1) {
      x = -1
    }
    x = x + 1
    document.getElementById(countarr1[x]).style.display = "block"
  }
  const handleDecrement = () => {
    document.getElementById(countarr1[x]).style.display = "none"
    if (x === 0) {
      x = countArr1Length
    }
    x = x - 1
    document.getElementById(countarr1[x]).style.display = "block"
  }
  return (
    <div className="mt-32">
      <SubHeading number="04" title="tram at csp" color="black" />
      <h2 className="pt-16">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque
      </h2>
      <ButtonComponent title="meet the entire team" color="black" />
      <div className="mt-20">
        <div id="q1">
          <InvestBanner
            memberName="Kushagra Dhawan0"
            memberDesignation="Lead Designer"
          />
        </div>
        <div id="q2" className="hidden">
          <InvestBanner
            memberName="Kushagra Dhawan1"
            memberDesignation="Lead Designer"
          />
        </div>
        <div id="q3" className="hidden">
          <InvestBanner
            memberName="Kushagra Dhawan2"
            memberDesignation="Lead Designer"
          />
        </div>
        <div id="q4" className="hidden">
          <InvestBanner
            memberName="Kushagra Dhawan3"
            memberDesignation="Lead Designer"
          />
        </div>
        <div className="mt-8 w-full h-1 rounded-full bg-blue-900"></div>

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
      </div>
    </div>
  )
}

export default TeamAtCsp

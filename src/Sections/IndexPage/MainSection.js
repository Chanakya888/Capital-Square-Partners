import React from "react"
import ButtonComponent from "../../Components/ButtonComponent"
import MainSectionPicture from "../../../assets/main-section.png"

const MainSection = () => {
  return (
    <div>
      <div className="px-5 pt-24">
        <h1 className="text-6xl leading-h1LineHeight">
          Equity investment for serious businesses and investors alike.
        </h1>
        <ButtonComponent
          title="Get in touch with us"
          function="send"
          color="black"
        />
      </div>
      <div className="pt-32">
        <img src={MainSectionPicture} alt="Main section" />
      </div>
    </div>
  )
}

export default MainSection

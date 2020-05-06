import React from "react"
import SubHeading from "../../Components/SubHeading"
import ButtonComponent from "../../Components/ButtonComponent"

const WhoWeAreSection = () => {
  return (
    <div className="py-32 px-5">
      <SubHeading number="01" title="Who we are" color="black" />
      <h2 className="pt-16">
        We are a private equity investment firm investing across
        telecommunications, media & technology, healthcare, consumer and
        business services sectors with footprints across south east Asia and
        India.
      </h2>
      <ButtonComponent
        title="browser investments"
        function="later"
        color="black"
      />
    </div>
  )
}

export default WhoWeAreSection

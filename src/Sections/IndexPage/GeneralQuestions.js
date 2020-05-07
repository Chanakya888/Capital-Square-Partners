import React from "react"
import SubHeading from "../../Components/SubHeading"
import AccordionComponent from "../../Components/AccordionComponent"

const GeneralQuestions = () => {
  return (
    <div className="mt-32">
      <SubHeading number="05" title="general questions" />
      <div className="mt-20 flex justify-between">
        <p className="w-11/12">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut.
        </p>
      </div>
      <div className="mt-16">
        <AccordionComponent
          question="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor."
          answer="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor."
        />
        <AccordionComponent
          question="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor."
          answer="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor."
        />
        <AccordionComponent
          question="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor."
          answer="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor."
        />
      </div>
    </div>
  )
}

export default GeneralQuestions

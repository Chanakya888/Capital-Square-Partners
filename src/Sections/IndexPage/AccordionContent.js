import React, { useEffect } from "react"

const AccordionContent = props => {
  // Accepts questions and answer

  useEffect(() => {
    console.log("window loaded")
    var accordions = document.getElementsByClassName("accordion")
    console.log(accordions[0])
    for (var i = 0; i < accordions.length; i++) {
      console.log("inside for loop")
      accordions[i].onClick = function () {
        console.log(accordions[i])
        var content = this.nextElementSibling
        console.log(content)
        if (content.style.maxHeight) {
          content.style.maxHeight = 0
        } else {
          content.style.maxHeight = content.scrollHeight + "px"
        }
      }
    }
  })

  return (
    <div>
      <div className="mt-6">
        <h2 className="accordion text-3xl leading-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor.
        </h2>
        <p className="accordionContent mt-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor.Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor.Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor.
        </p>
        <div className="mt-6 h-border w-full bg-black opacity-10"></div>
      </div>
      <div className="mt-6">
        <h2 className="accordion text-3xl leading-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor.
        </h2>
        <p className="accordionContent mt-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor.Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor.Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor.
        </p>
        <div className="mt-6 h-border w-full bg-black opacity-10"></div>
      </div>
    </div>
  )
}

export default AccordionContent

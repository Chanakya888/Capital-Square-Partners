import React, { useEffect } from "react"

const AccordionContent = props => {
  // Accepts questions and answer

  useEffect(() => {
    var accordion = document.getElementsByClassName("accordion")

    for (var i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function () {
        var accordionContent = this.nextElementSibling

        if (accordionContent.style.maxHeight) {
          accordionContent.style.maxHeight = null
        } else {
          accordionContent.style.maxHeight =
            accordionContent.scrollHeight + "px"
        }
      })
    }
  })

  return (
    <div>
      <div className="mt-6">
        <h2 id="accordion" className="accordion text-3xl leading-8">
          {props.question}
        </h2>
        <p className="accordionContent mt-5">{props.answer}</p>
        <div className="mt-6 h-border w-full bg-black opacity-10"></div>
      </div>
    </div>
  )
}

export default AccordionContent

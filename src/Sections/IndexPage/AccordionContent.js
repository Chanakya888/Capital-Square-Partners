import React from "react"

const AccordionContent = props => {
  // Accepts questions and answer
  var acc = document.getElementsByClassName("accordion")
  let accordions = Array.from(acc)
  console.log(accordions)
  console.log(accordions[0])
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].onClick = function () {
      console.log("clicked")
      var content = this.nextElementSibling
      console.log(content)
      if (content.style.maxHeight) {
        content.style.maxHeight = 0
      } else {
        content.style.maxHeight = content.scrollHeight + "px"
      }
    }
  }
  return (
    <div className="mt-6">
      <h2 className="accordion text-3xl leading-8">{props.question}</h2>
      <p className="accordionContent mt-5">{props.answer}</p>
      <div className="mt-6 h-border w-full bg-black opacity-10"></div>
    </div>
  )
}

export default AccordionContent

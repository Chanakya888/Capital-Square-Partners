import React from "react"

const SubHeading = props => {
  // Accepts number, title and color as props
  return (
    <div>
      <h3 className={`text-xs tracking-morewider text-${props.color}`}>
        {props.number}
      </h3>
      <h4
        className={`text-xs tracking-morewider uppercase text-${props.color}`}
      >
        {props.title}
      </h4>
    </div>
  )
}

export default SubHeading

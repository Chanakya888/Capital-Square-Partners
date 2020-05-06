import React from "react"

const ButtonComponent = props => {
  // Accepts title color and function name
  // Border of the button changes based on the color of the text that you set for the button
  let borderColor = "border-gray-200"
  if (props.color === "white") {
    borderColor = "border-gray-700"
  }
  return (
    <div className="pt-16">
      <button
        className={`px-12 py-8 border-solid ${borderColor} border uppercase tracking-morewider text-tiny text-${props.color}`}
        onClick={() => {
          if (props.function === "say") {
            console.log("hey say")
          } else console.log("hey dude")
        }}
      >
        {props.title}
      </button>
    </div>
  )
}

export default ButtonComponent

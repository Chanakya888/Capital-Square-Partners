import React from "react"

const ButtonComponent = props => {
  return (
    <div className="pt-16">
      <button
        className="px-8 py-6 border-solid border-gray-200 border uppercase tracking-morewider text-tiny"
        onClick={() => {
          if (props.function === "say") {
            console.log("hey say")
          } else console.log("hey dude")
        }}
      >
        {props.value}
      </button>
    </div>
  )
}

export default ButtonComponent

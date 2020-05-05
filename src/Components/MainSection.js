import React from "react"
import ButtonComponent from "./ButtonComponent"

const MainSection = () => {
  return (
    <div className="px-5 pt-24">
      <h1>Equity investment for serious businesses and investors alike.</h1>
      <ButtonComponent value="Get in touch with us" function="say" />
    </div>
  )
}

export default MainSection

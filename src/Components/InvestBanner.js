import React from "react"

const InvestBanner = props => {
  // Accepts Date, Company name and customer (let it be as a constant) for Recent Investments section
  // Accepts memberName and memberDesignation for team at CSP section
  return (
    <div className=" mt-8 w-full h-64 bg-gray-800 relative heightofbox ">
      <div className="absolute text-tiny left-0 pl-8 pt-8 text-white uppercase tracking-morewider">
        {props.date}
      </div>
      <div className="absolute text-xl bottom-0 pb-8 pl-8 text-white ">
        {props.companyName}
        {props.memberName}
      </div>
      <div className="absolute uppercase opacity-50 text-tiny bottom-0 pb-16 pl-8 text-white tracking-morewider">
        {props.name}
        {props.memberDesignation}
      </div>
    </div>
  )
}

export default InvestBanner

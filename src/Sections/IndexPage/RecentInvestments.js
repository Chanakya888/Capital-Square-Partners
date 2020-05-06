import React from "react"
import SubHeading from "../../Components/SubHeading"
import InvestBanner from "../../Components/InvestBanner"
import ButtonComponent from "../../Components/ButtonComponent"

const RecentInvestments = () => {
  // This is the section that maintains investment banners
  return (
    <div className="pt-24 pb-32 bg-black px-5">
      <SubHeading number="02" title="our recent investments" color="white" />
      <h2 className="pt-16 text-white ">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque
      </h2>
      <div className="mt-20">
        <InvestBanner
          date="April 2020"
          companyName="Indecomm services"
          name="customer"
        />
        <InvestBanner
          date="April 2020"
          companyName="Indecomm services"
          name="customer"
        />
        <InvestBanner
          date="April 2020"
          companyName="Indecomm services"
          name="customer"
        />
      </div>
      <div className="w-full flex justify-center">
        <ButtonComponent
          classNamee="opacity-0.5"
          title="browse more"
          function="later"
          color="white"
        />
      </div>
    </div>
  )
}

export default RecentInvestments

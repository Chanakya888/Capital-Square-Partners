import React from "react"
import Layout from "../Components/Layout"
import "../css/index.css"
import MainSection from "../Sections/IndexPage/MainSection"
import WhoWeAreSection from "../Sections/IndexPage/WhoWeAreSection"
import RecentInvestments from "../Sections/IndexPage/RecentInvestments"
import WhatWeDo from "../Sections/IndexPage/WhatWeDo"
import TeamAtCsp from "../Sections/IndexPage/TeamAtCsp"
import GeneralQuestions from "../Sections/IndexPage/GeneralQuestions"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => {
  return (
    <div>
      <Layout />

      <div className="pt-16">
        <AniLink cover to="/rough" direction="right" bg="blue">
          Go to Page 3
        </AniLink>
        {/* Padding has to be changed inside the component for Main section because of the Picture */}
        <MainSection />
        <div className="px-5 sm:px-10">
          <WhoWeAreSection />
        </div>
        {/* Padding has to be changed inside the component for recent investments because of the dark background  */}
        <RecentInvestments />
        <div className="px-5 sm:px-10">
          <WhatWeDo />
          <TeamAtCsp />
          <GeneralQuestions />
        </div>
      </div>
    </div>
  )
}
export default IndexPage

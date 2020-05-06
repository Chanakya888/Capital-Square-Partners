import React from "react"
import Layout from "../Components/Layout"
import "../css/index.css"
import MainSection from "../Sections/IndexPage/MainSection"
import WhoWeAreSection from "../Sections/IndexPage/WhoWeAreSection"
import RecentInvestments from "../Sections/IndexPage/RecentInvestments"
import WhatWeDo from "../Sections/IndexPage/WhatWeDo"
import TeamAtCsp from "../Sections/IndexPage/TeamAtCsp"
import GeneralQuestions from "../Sections/IndexPage/GeneralQuestions"

export default () => (
  <div>
    <Layout />
    <div className="pt-16">
      <MainSection />
      <WhoWeAreSection />
      <RecentInvestments />
      <WhatWeDo />
      <TeamAtCsp />
      <GeneralQuestions />
    </div>
  </div>
)

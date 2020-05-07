import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ButtonComponent from "../../Components/ButtonComponent"

const MainSection = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "main-section.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <div className="pt-24 px-5 sm:px-10">
        <h1 className="text-6xl leading-h1LineHeight sm:w-4/5 ">
          Equity investment for serious businesses and investors alike.
        </h1>
        <ButtonComponent
          title="Get in touch with us"
          function="send"
          color="black"
        />
      </div>
      <div className="pt-32">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="this is the people walking"
        ></Img>
      </div>
    </div>
  )
}

export default MainSection

// export const query =

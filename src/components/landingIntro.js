import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const LandingIntro = () => {
  const data = useStaticQuery(graphql`
    query SiteDescQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  const { description } = data.site.siteMetadata
  return (
    <div>
      <h2>{description}</h2>
    </div>
  )
}

export default LandingIntro

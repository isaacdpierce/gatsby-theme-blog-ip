import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const MiniBio = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <div style={{ display: "flex" }}>
      <Img
        style={{
          marginRight: "1rem",
          borderRadius: "10%",
          boxShadow: "0 0 3px 3px grey",
        }}
        fixed={data.file.childImageSharp.fixed}
        alt="Picture of me!"
      />
      <div>
        <h2 style={{ margin: 0 }}>My MiniBio</h2>
        <p>I like to help people make things on the internet!</p>
      </div>
    </div>
  )
}

export default MiniBio

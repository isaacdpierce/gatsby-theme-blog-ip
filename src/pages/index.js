import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LandingIntro from "../components/landingIntro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingIntro />
    <h2>Get going!</h2>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

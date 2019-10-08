import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostList from "../components/postList"

export default () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Hi from the Blog page</h1>
      <PostList />
    </Layout>
  )
}

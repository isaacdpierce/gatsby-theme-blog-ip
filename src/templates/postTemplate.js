import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import MiniBio from "../components/miniBio"

export default function PageTemplate({ data: { mdx, site } }) {
  return (
    <Layout>
      <SEO title={`${site.siteMetadata.author} — ${mdx.frontmatter.title}`} />
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <MiniBio />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        author
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

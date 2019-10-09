import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const PostList = () => {
  const data = useStaticQuery(graphql`
    query BlogListQuery {
      allMdx {
        edges {
          node {
            excerpt(pruneLength: 30)
            id
            frontmatter {
              date(formatString: "MMMM DD YYYY")
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges: posts } = data.allMdx
  return (
    <div>
      <h1>This is an MDX Blog</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id} style={{ listStyle: "none" }}>
            <Link to={post.fields.slug}>
              <h2 style={{ color: "darkred" }}>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList

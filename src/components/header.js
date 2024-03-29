/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const ListLink = props => (
  <li
    sx={{
      padding: 0,
      margin: 0,
    }}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query mainNavLinksQuery {
      allMainNavLinksJson {
        edges {
          node {
            id
            link
            path
          }
        }
      }
    }
  `)

  return (
    <header
      sx={{
        backgroundColor: `muted`,
        marginBottom: 1,
      }}
    >
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `flex-end`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <ul
          style={{
            listStyle: `none`,
            margin: 0,
            width: "30%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/*  Create menu links */}
          {data.allMainNavLinksJson.edges.map(({ node }) => {
            return (
              <ListLink key={node.id} to={node.path}>
                {node.link}
              </ListLink>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

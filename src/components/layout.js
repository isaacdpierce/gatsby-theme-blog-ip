import React from "react"
import { css } from "@emotion/core"
import GlobalStyles from "./globalStyles"
import "./layout.css"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

// Create a grid to  place the items
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 100vw;
  padding: 0px 1.0875rem 1.45rem;
`

const Main = styled.section`
  max-width: 90vw;
`

const Footer = styled.footer`
  display: flex;
  min-height: 100px;
  width: 100vw;
  justify-content: center;
  align-items: flex-end;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built by &nbsp;
          <a href="https://www.isaacpierce.io"> Isaac Pierce</a>
        </Footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

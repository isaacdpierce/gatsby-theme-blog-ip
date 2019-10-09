import React from "react"
import { Global, css } from "@emotion/core"

export default () => (
  <Global
    styles={css`
      a {
        color: hotpink;
        text-decoration: none;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: Source Serif Pro;
      }
    `}
  />
)

import React from "react"
import { css } from "@emotion/core"

const Footer = ({ title }) => {
  const year = new Date().getFullYear()
  return (
    <>
      <p
        css={css`
          text-align: center;
          color: #fff;
          background-color:#7c7575;
          margin: 0;
          padding: 1rem;
          margin-top: 3rem;
        `}
      >
        {title}. Todos los derechos Reservados {year} &copy;
      </p>
    </>
  )
}

export default Footer

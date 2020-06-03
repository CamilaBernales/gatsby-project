import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
// import Image from 'gatsby-image'
import { Link } from "gatsby"
const Boton = styled(Link)`
  margin 0 auto;
  padding: 0.7rem;
  background-color: #b8b0b0;
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`
const LookPrev = ({ look }) => {
  const {  contenido, imagen, titulo, slug } = look

  return (
    <div
      css={css`
        margin-bottom: 5rem;
      `}
    >
      {imagen.map((img, i) => (
        <img
          key={i}
          css={css`
            border: 0.5px solid #dfd3d3;
            max-width: 400px;
            padding: 2rem;
            width: 95%;
            @media (max-width: 768px) {
              padding-top: 1rem;
              margin: 0 auto;
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              column-gap: 5rem;
            }
          `}
          src={img.fluid.srcSet}
        />
      ))}

      <h5
        css={css`
          margin: 2rem;
          text-align: center;
          font-size: 2.3rem;
          color: #7c7575;
          padding-left: 1rem;
        `}
      >
        {titulo}
      </h5>
      <div>
        <p
          css={css`
            text-align: center;
            margin: 2rem;
          `}
        >
          {contenido}
        </p>
        <Boton to={slug}> Ver </Boton>
      </div>
    </div>
  )
}

export default LookPrev

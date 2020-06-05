import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsLook(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const Looks = ({
  data: {
    allDatoCmsLook: { nodes },
  },
}) => {
  const { titulo, contenido, imagen } = nodes[0]
  return (
    <Layout>
      <div
        css={css`
          margin-bottom: 5rem;
        `}
      >
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
        </div>
        <div
        css={css`
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        `}
      >
        {imagen.map(img => (
          <img
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
        </div>
      </div>
    </Layout>
  )
}

export default Looks

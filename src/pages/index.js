import React from "react"
import Layout from "../components/Layout"
import ImagPrincipal from "../components/imagPrincipal"
import InicioPage from "../components/InicioPage"
import useLooks from "../hooks/use-looks"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import LookPrev from "../components/LookPrev"

const IndexPage = () => {
  const looks = useLooks()
  return (
    <div>
      <Layout>
        <ImagPrincipal />
        <InicioPage />
        <h2
          css={css`
              text-align:center;
              margin: 4rem;
              font-size:2.3rem;
              color: #7c7575;
              `}
        >
          Looks
        </h2>
        <ul>
          {looks.map(look => (
            <LookPrev key={look.id} look={look} />
          ))}
        </ul>
      </Layout>
    </div>
  )
}

export default IndexPage

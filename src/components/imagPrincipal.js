import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./imagPrincipal.module.css"
import styled from "@emotion/styled"

const Background = styled(BackgroundImage)`
  height: 700px;
`
const Text = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.5),
    rgba(34, 49, 63, 0.5)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2rem;
    margin: 0%;
    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }
`
const ImagPrincipal = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "img7.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Background tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <Text>
        <h1>Bienvenido a Roperito</h1>
      </Text>
    </Background>
  )
}

export default ImagPrincipal
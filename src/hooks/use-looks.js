import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const useLooks = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsLook {
        nodes {
          titulo
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              srcSet
            }
          }
        }
      }
    }
  `)
  console.log(data);

}

export default useLooks

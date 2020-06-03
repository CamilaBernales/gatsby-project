import { graphql, useStaticQuery } from "gatsby"

const useLooks = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsLook {
        nodes {
          titulo
          contenido
          id
          slug
          imagen {
            fluid(maxWidth: 1200) {
              srcSet
            }
          }
        }
      }
    }
  `)
    return data.allDatoCmsLook.nodes.map(look=>({
        titulo: look.titulo,
        id: look.id,
        contenido: look.contenido,
        imagen: look.imagen,
        slug: look.slug
    }))
}

export default useLooks

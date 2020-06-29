import { graphql, useStaticQuery } from "gatsby"

const UseSeo = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)
  return data.datoCmsSite.globalSeo;
}

export default UseSeo

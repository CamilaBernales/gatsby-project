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
  console.log(data)
  return data.datoCmsSite.globalSeo;
}

export default UseSeo

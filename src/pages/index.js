import React from "react"
import Layout from "../components/Layout"
import ImagPrincipal from "../components/imagPrincipal"
import InicioPage from "../components/InicioPage"
import useLooks from "../hooks/use-looks"


const IndexPage = () => {
  useLooks();
  return (
    <div>
      <Layout>
        <ImagPrincipal/>
        <InicioPage/>
      </Layout>
    </div>
  )
}

export default IndexPage


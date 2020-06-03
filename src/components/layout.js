import React from "react"
import Header from "./header/header"
import Footer from "./Footer"
import useSeo from "../hooks/use-seo"
import { Helmet } from "react-helmet"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Layout = props => {
  const seo = useSeo()
  const {
    fallbackSeo: { description, title },
  } = seo
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      </Helmet>
      <Header />
      {props.children}
      <Footer title={title} />
    </>
  )
}
export default Layout

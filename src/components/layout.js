import React from "react";
import Header from './header/header';
import { Helmet } from 'react-helmet';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Layout = (props) => {

    return (
        <>
            <Helmet>
                <title>Gatsby Clothes</title>
                <meta name="description" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
            </Helmet>
            <Header />
            {props.children}
        </>
    )

}
export default Layout;
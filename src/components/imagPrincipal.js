import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

const ImagPrincipal = () => {

const {imagen} = useStaticQuery(graphql`
    query{
        image: file(relativePath:{eq: "img1.jpg"}){
            sharp: childImageSharp{
                fluid{
                    srcSetWebp
                }
            }
        }
    }
    
    `);
    console.log(imagen)



        return (
        <h1>Imagen aki</h1>
    )
}

export default ImagPrincipal

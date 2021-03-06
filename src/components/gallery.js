import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

const getImages = graphql `
query {
hotelImg: allFile(filter: {name: {in: ["hotel-1", "hotel-2", "hotel-3"]}}) {
    edges {
      node {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
}
`

const Gallery = ()=>{

    const data = useStaticQuery(getImages)
    const hotels = data.hotelImg.edges
    console.log(data)
    

    return(
        <div>
            <p>gallery</p>
            <div className = 'gallery'>
            <Img fluid = {hotels[0].node.childImageSharp.fluid} className ='photo'/>
            <Img fluid = {hotels[1].node.childImageSharp.fluid} className ='photo'/>
            <Img fluid = {hotels[2].node.childImageSharp.fluid} className ='photo'/>
            </div>
            
        </div>
        
    )
}
export default Gallery
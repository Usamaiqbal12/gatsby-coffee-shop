import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import { graphql } from 'gatsby'
import Info from "../components/Home/Info"



const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
        <BackgroundSection img={data.img.childImageSharp.fluid} title="regular joe's" styleClass="default-background" /> 
        <Info/> 
  </Layout>
)

export const query = graphql`
{
 img:file(relativePath: {eq: "default-background.jpeg"}){

childImageSharp{

fluid(maxWidth: 3080, quality: 100){
	...GatsbyImageSharpFluid
}}
}
}
`
export default IndexPage

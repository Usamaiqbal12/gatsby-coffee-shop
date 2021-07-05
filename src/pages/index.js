import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import { graphql } from 'gatsby'
import Info from "../components/Home/Info"
import Menu from './../components/Home/Menu';
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
        <BackgroundSection img={data.img.childImageSharp.fluid} title="regular joe's" styleClass="default-background" /> 
        <Info/> 
        <Menu items={data.menu}/>
        <Products />
        <Contact />
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


menu:allContentfulCoffeeItem{
edges{
node{
	id
  title
  description{
	description
  }
  price
  category
  image{
	fixed(width:50, height:50){
		...GatsbyContentfulFixed
  }
  }
  
}
}
}
}
`
export default IndexPage

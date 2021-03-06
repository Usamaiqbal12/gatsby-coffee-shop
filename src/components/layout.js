

import * as React from "react"
import PropTypes from "prop-types"
 import 'bootstrap/dist/css/bootstrap.min.css'

import "./layout.css"
import NavBar from './Globals/NavBar';
import Footer from "./Globals/Footer";

const Layout = ({ children }) => {
  
  return (
    <>
    <NavBar/>
        <main>{children}</main>
       <Footer/>
  
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

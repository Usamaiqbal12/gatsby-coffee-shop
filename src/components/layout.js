

import * as React from "react"
import PropTypes from "prop-types"
 import 'bootstrap/dist/css/bootstrap.min.css'

import "./layout.css"
import NavBar from './Globals/NavBar';

const Layout = ({ children }) => {
  
  return (
    <>
    <NavBar/>
        <main>{children}</main>
       
  
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

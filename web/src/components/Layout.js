import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"

import "./reset.css" // Feel free to remove this and use your preferred styling methods.

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

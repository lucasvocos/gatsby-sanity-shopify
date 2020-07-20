import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
// import './Footer.scss'
// I'm preferring 'styled-components' lately but feel free to import a stylesheet

const Footer = styled.footer`
  /* Enter your styles here */
`

const FooterComponent = props => {
  // run graphql queries, useState, etc.
  return <Footer></Footer>
}

export default FooterComponent

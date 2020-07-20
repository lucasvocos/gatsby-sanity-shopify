import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
// import './Header.scss'
// I'm preferring 'styled-components' lately but feel free to import a stylesheet

const Header = styled.header`
  /* Enter your styles here */
`

const HeaderComponent = props => {
  // run graphql queries, setState, useContext, etc.
  return (
    <Header>
      <h1>Edit pages/index.js</h1>
    </Header>
  )
}

export default HeaderComponent

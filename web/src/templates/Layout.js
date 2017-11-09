import React from "react"
import { Container } from "reactstrap"

import Content from "./Content"

import NavigationBar from "../organisms/NavigationBar"
import Footer from "../organisms/Footer"

import helpers from "../helpers"

const Layout = props => (
  <Container>
    <NavigationBar user={helpers.decodeToken()} />
    <Content>{props.children}</Content>
    <Footer />
  </Container>
)

export default Layout

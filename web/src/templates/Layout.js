import React from "react"
import { Container } from "reactstrap"

import NavigationBar from "../organisms/NavigationBar"
import Footer from "../organisms/Footer"

const Layout = props => (
  <Container>
    <NavigationBar />
    {props.children}
    <Footer />
  </Container>
)

export default Layout

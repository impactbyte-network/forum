import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Layout from "./templates/Layout"

import Welcome from "./pages/Welcome"
import Home from "./pages/Home"

const App = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/welcome" component={Welcome} />
    </Layout>
  </Router>
)

export default App

import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Layout from "./templates/Layout"

import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import Answers from "./pages/Answers"
import Profile from "./pages/Profile"
import Ask from "./pages/Ask"

const App = () => (
  <Router>
    <Layout>
      <Route path="/welcome" component={Welcome} />
      <Route exact path="/" component={Home} />
      <Route path="/answers" component={Answers} />
      <Route path="/profile" component={Profile} />
      <Route path="/ask" component={Ask} />
    </Layout>
  </Router>
)

export default App

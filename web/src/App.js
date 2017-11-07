import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Layout from "./templates/Layout"

import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import Answer from "./pages/Answer"
import Question from "./pages/Question"
import Profile from "./pages/Profile"
import Ask from "./pages/Ask"

const App = () => (
  <Router>
    <Layout>
      <Route path="/welcome" component={Welcome} />
      <Route exact path="/" component={Home} />
      <Route path="/answer" component={Answer} />
      <Route path="/question/:id" component={Question} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/ask" component={Ask} />
    </Layout>
  </Router>
)

export default App

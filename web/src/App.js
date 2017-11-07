import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Layout from "./templates/Layout"

import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import Answer from "./pages/Answer"
import Question from "./pages/Question"
import Profile from "./pages/Profile"
import Ask from "./pages/Ask"

import Profiles from "./pages/Profiles"
import Questions from "./pages/Questions"

const App = () => (
  <Router>
    <Layout>
      <Route path="/welcome" component={Welcome} />
      <Route exact path="/" component={Home} />
      <Route path="/answer" component={Answer} />
      <Route path="/question/:id" component={Question} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/ask" component={Ask} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/questions" component={Questions} />
    </Layout>
  </Router>
)

export default App

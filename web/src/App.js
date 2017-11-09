import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// import Layout from "./templates/Layout"

import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import Answer from "./pages/Answer"
import Question from "./pages/Question"
import Profile from "./pages/Profile"
import Ask from "./pages/Ask"
import NotFound from "./pages/NotFound"

import Profiles from "./pages/Profiles"
import Questions from "./pages/Questions"

// import requireAuth from "./templates/requireAuth"

import helpers from "./helpers"

const user = helpers.decodeToken()

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/welcome" component={Welcome} />
        {/* <Route exact path="/" handler={requireAuth(Home)} name="home" /> */}
        <Route exact path="/" component={Home} />
        <Route path="/answer" component={Answer} />
        <Route path="/question/:id" component={Question} />
        <Route path="/profile/:id" component={Profile} />
        {/* <Route path="/ask" handler={requireAuth(Ask)} name="ask" /> */}
        <Route path="/ask" render={() => <Ask user={user} />} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/questions" component={Questions} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App

import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import NavigationBar from "./organisms/NavigationBar"

import Welcome from "./pages/Welcome"
import Home from "./pages/Home"

const App = () => (
  <Router>
    <div>
      <NavigationBar />
      <Route exact path="/" component={Home} />
      <Route path="/welcome" component={Welcome} />
    </div>
  </Router>
)

export default App

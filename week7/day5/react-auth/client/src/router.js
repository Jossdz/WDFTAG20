import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LayoutApp from "./components/LayoutApp"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

const Home = () => <h1>Home</h1>

const router = () => {
  return (
    <Router>
      <LayoutApp>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={Login} path='/login' />
          <Route component={Signup} path='/signup' />
          <Route component={Profile} path='/profile' />
        </Switch>
      </LayoutApp>
    </Router>
  )
}

export default router

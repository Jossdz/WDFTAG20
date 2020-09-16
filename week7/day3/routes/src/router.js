import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import ProfileM from "./pages/ProfileM"
import Search from "./pages/Search"

// const Home = () => <h1>Home</h1>
// const Login = () => <h1>Login</h1>
// const Signup = () => <h1>Signup</h1>
// const Profile = () => <h1>Profile</h1>
// const ProfileM = () => <h1>ProfileM</h1>
// const Search = () => <h1>Search</h1>

const router = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Login} path='/login' />
        <Route component={Signup} path='/signup' />
        <Route component={Profile} path='/profile' exact />
        <Route component={ProfileM} path='/profile/:email/:erwe' />
        <Route component={Search} path='/search' />
      </Switch>
    </Router>
  )
}

export default router

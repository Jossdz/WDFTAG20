import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LayoutApp from "./components/LayoutApp"
import CreateProject from "./pages/CreateProject"
import Home from "./pages/Home"
import Project from "./pages/Project"
import EditProject from "./pages/EditProject"

const Task = () => <h1>Task</h1>

const router = () => (
  <Router>
    <LayoutApp>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={CreateProject} path='/project/new' exact />
        <Route component={Project} path='/project/:projectId' exact />
        <Route component={EditProject} path='/project/edit/:projectId' />
        <Route component={Task} path='/task/:taskId' />
      </Switch>
    </LayoutApp>
  </Router>
)

export default router

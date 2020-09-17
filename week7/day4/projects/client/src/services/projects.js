import axios from "axios"
const baseURL = "http:///localhost:3000/api/projects"

const projectsService = axios.create({ baseURL })

export const newProject = async ({ title, description }) => {
  const { data: project } = await projectsService.post("/", {
    title,
    description
  })
  return project
}

export const getProjects = async () => {
  const { data: projects } = await projectsService.get("/")
  return projects
}

export const getProject = async projectId => {
  const { data: project } = await projectsService.get(`/${projectId}`)
  return project
}

export const editProject = async (projectId, title, description) => {
  const { data: project } = await projectsService.put(`/${projectId}`, {
    title,
    description
  })
  return project
}

export const deleteProject = async projectId => {
  const { data } = await projectsService.delete(`/${projectId}`)
  return data
}

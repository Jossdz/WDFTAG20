import axios from "axios"
const baseURL = "http:///localhost:3000/api/tasks"

const tasksService = axios.create({ baseURL })

export const createTask = async (projectId, title, description) => {
  const { data: task } = await tasksService.post(`/${projectId}`, {
    title,
    description
  })
  return task
}

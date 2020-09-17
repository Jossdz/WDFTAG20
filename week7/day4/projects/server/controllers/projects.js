const Project = require("../models/Project")

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find().populate("tasks")
  res.status(200).json(projects)
}

exports.getSingleProject = async (req, res) => {
  const { projectId } = req.params
  const project = await Project.findById(projectId).populate("tasks")
  res.status(200).json(project)
}

exports.createProject = async (req, res) => {
  const { title, description } = req.body
  const project = await Project.create({
    title,
    description
  })
  res.status(201).json(project)
}

exports.updateProject = async (req, res) => {
  const { projectId } = req.params
  const { title, description } = req.body
  const project = await Project.findByIdAndUpdate(
    projectId,
    { title, description },
    { new: true }
  )
  res.status(202).json(project)
}

exports.deleteProject = async (req, res) => {
  const { projectId } = req.params
  await Project.findByIdAndDelete(projectId)
  res.status(200).json({ message: "deleted" })
}

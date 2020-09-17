const Project = require("../models/Project")
const Task = require("../models/Task")

exports.getSingleTask = async (req, res) => {
  const { taskId } = req.params
  const task = await Task.findById(taskId)
  res.status(200).json(task)
}

exports.createTask = async (req, res) => {
  const { title, description } = req.body
  const project = await Project.findOne({ _id: req.params.projectId })
  const task = await Task.create({
    title,
    description,
    project: project._id
  })
  project.tasks.push(task)
  await project.save()
  res.status(201).json(task)
}

exports.updateTask = async (req, res) => {
  const { taskId } = req.params
  const { title, description } = req.body
  const task = await Task.findByIdAndUpdate(
    taskId,
    { title, description },
    { new: true }
  )
  res.status(202).json(task)
}

exports.deleteTask = async (req, res) => {
  const { taskId } = req.params
  await Task.findByIdAndDelete(taskId)
  res.status(200).json({ message: "deleted" })
}

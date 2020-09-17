const express = require("express")
const router = express.Router()
const {
  createProject,
  deleteProject,
  getAllProjects,
  getSingleProject,
  updateProject
} = require("../controllers/projects")

const {
  createTask,
  deleteTask,
  getSingleTask,
  updateTask
} = require("../controllers/tasks")
const { catchErrors } = require("../middlewares/index")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})

//============Projects================
router.get("/projects", catchErrors(getAllProjects))
router.post("/projects", catchErrors(createProject))
router.get("/projects/:projectId", catchErrors(getSingleProject))
router.put("/projects/:projectId", catchErrors(updateProject))
router.delete("/projects/:projectId", catchErrors(deleteProject))

//============Tasks================
router.post("/tasks/:projectId", catchErrors(createTask))
router.get("/tasks/:taskId", catchErrors(getSingleTask))
router.put("/tasks/:taskId", catchErrors(updateTask))
router.delete("/tasks/:taskId", catchErrors(deleteTask))

module.exports = router

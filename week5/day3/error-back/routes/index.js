const express = require("express")
const router = express.Router()
const { getNotes, createNote } = require("../controllers/notes")
const { catchErrors } = require("../middlewares")

/* GET home page */
router.get("/", catchErrors(getNotes))

router.post("/notes", catchErrors(createNote))

module.exports = router

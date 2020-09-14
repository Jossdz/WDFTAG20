const express = require("express")
const router = express.Router()

/* GET home page */
router.get("/", (req, res, next) => {
  throw new Error("yolo")
  res.render("index")
})

module.exports = router

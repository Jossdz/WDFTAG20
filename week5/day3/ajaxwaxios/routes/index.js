const express = require("express")
const router = express.Router()

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})

router.get("/page/:page", (req, res) => {
  res.render("index", { page: req.params.page })
})

module.exports = router

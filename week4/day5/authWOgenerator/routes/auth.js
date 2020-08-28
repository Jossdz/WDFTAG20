const express = require("express")
const router = express.Router()

const { signupView, signupProcess } = require("../controllers/auth")

console.log(signupView)

router.get("/signup", signupView)
router.post("/signup", signupProcess)

module.exports = router

const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PWD
  }
})

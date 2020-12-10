const router = require("express").Router()
const eventRoutes = require("./events")
const noteRoutes = require("./notes")
const userRoutes = require("./users")
const sendMail = require("./sendMail")

router.use("/events", eventRoutes)
router.use("/notes", noteRoutes)
router.use("/users", userRoutes)
router.use("/reminder", sendMail)

module.exports = router
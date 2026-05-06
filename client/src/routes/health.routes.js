const express = require("express")
const { checkHealth } = require("../controllers/health.controller")


const healthRouter = express.Router()


healthRouter.get("/", checkHealth)


module.exports = healthRouter
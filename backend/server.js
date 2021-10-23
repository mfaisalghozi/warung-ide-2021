require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const server = express()

// Server Config
var corsOptions = {
  origin: "http//localhost:8081"
}

server.use(morgan('combined'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors(corsOptions))

// Database Config
const db = require('./models')

// db.sequelize.sync()
db.sequelize.sync({ force: true }).then(() => {
  console.log("DROP & RESYNC DB")
})

// Router Config
const projectRouter = require('./routes/projectRouter.routes')
const tutorialRouter = require('./routes/tutorial.routes')
server.use(projectRouter)
server.use(tutorialRouter)

// Main Apps Command
const serverUrl = process.env.PORT || 3000
server.listen(serverUrl, () => console.log(`Server started on port ${serverUrl}!`))
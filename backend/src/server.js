require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const server = express()

// Database Config
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection

// Server Config
server.use(morgan('combined'))
server.use(bodyParser.json())
server.use(express.json())
server.use(cors())

// Router Config
const projectRouter = require('../routes/projectRouter')
server.use(projectRouter)

// Main Apps Command
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database!'))

const serverUrl = process.env.PORT || 3000
server.listen(serverUrl, () => console.log('Server started!'))
require('dotenv').config()
const express = require('express')
const server = express()
const cors = require('cors')


// Database Config
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection

// Router Config
const router = require('./routes/projectRouter')

server.use(express.json())
server.use(cors())
server.use('/project', router)

server.get('/', (req, res) => {
    res.send('Hello World!')
})

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database!'))


server.listen(3000, () => console.log('Server started!'))
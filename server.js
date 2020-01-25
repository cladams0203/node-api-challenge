const express = require('express')
const server = express()
const cors = require('cors')
const projectRouter = require('./projectRouter')
const actionRouter = require('./actionRouter')

server.use(express.json())
server.use(cors())
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

module.exports = server
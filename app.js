const express = require('express')
const cors = require('cors')
const porterRouter = require('./controllers/porter')
const middleware = require('./utils/middleware')
const dsaRouter = require('./controllers/studentAffairs')

const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
require('./connection')
app.use('/api/porter', porterRouter)
app.use('/api/dsa', dsaRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)
module.exports = app

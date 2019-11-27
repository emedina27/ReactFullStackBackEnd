const express = require('express')
const path = require('path')
require('./db/mongoose')
const userRouter = require('./routers/userRouter')
const userTask = require('./routers/taskRouter')

const app = express()

app.use(express.json())
//import routes from routers folder
app.use(userRouter)
app.use(userTask)

const publicDirectoryPath = path.join(__dirname, '../client/')
app.use(express.static(publicDirectoryPath))

module.exports = app

const express = require('express')
const app = express()
const { PORT } = require('../config.js')
const studentRouter = require('./routes/students.js')

const modelMiddleware = require('./middleweares/model.js')
app.use(modelMiddleware)

app.use('/students',studentRouter)


app.listen(PORT,()=>{console.log("Server is running....")})
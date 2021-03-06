const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection.js')

const app = express()

app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({ extended: true }))

app.set('views', path.resolve())

connectDB

app.use('/', require('./server/routes/router'))

const PORT = 5500

app.listen(5500, () => { console.log(`Server running on http://localhost:${PORT}`) })
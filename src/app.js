import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import routes from './routes'
import connection from './config/dbConnection'
import mongoose from 'mongoose'
require('dotenv').config()

console.log('to com sono')

const app = express()
mongoose.connect(process.env.URI_DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(res => {
    console.log('conected')
  }).catch(error => {
    console.log(error)
  })

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use('/upload', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
app.use('/', routes)

export default app

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import routes from './routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use('/upload', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
app.use('/', routes)

export default app

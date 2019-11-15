import express from 'express'
import userRoute from './user'

const router = express.Router()

router.use('/user', userRoute)
router.get('/', (req, res) => res.send('Hello World!'))

export default router

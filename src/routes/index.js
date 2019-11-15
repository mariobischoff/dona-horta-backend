import express from 'express'
import userRoute from './user'
import authRoute from './auth'

const router = express.Router()

router.use('/user', userRoute)
router.use('/auth', authRoute)
router.get('/', (req, res) => res.send('Hello World!'))

export default router

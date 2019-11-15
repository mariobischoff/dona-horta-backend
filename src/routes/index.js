import express from 'express'
import userRouter from './user'
import authRouter from './auth'

const router = express.Router()

router.use('/user', userRouter)
router.use('/auth', authRouter)
router.get('/', (req, res) => res.send('Hi'))

export default router
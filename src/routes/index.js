import express from 'express'
import userRoute from './user'
import categoryRoute from './category'

const router = express.Router()

router.use('/user', userRoute)
router.use('/category', categoryRoute)
router.get('/', (req, res) => res.send('Hello World!'))

export default router

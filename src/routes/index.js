import express from 'express'
import userRoute from './user'
import categoryRoute from './category'
import productRoute from './product'

const router = express.Router()

router.use('/user', userRoute)
router.use('/category', categoryRoute)
router.use('/product', productRoute)
router.get('/', (req, res) => res.send('Hello World!'))

export default router

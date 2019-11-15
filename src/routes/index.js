import express from 'express'
import userRoute from './user'
<<<<<<< HEAD
import authRoute from './auth'
=======
import categoryRoute from './category'
>>>>>>> fba32b3f989db6689a37ef52fa6c53fa810b02d6

const router = express.Router()

router.use('/user', userRoute)
<<<<<<< HEAD
router.use('/auth', authRoute)
=======
router.use('/category', categoryRoute)
>>>>>>> fba32b3f989db6689a37ef52fa6c53fa810b02d6
router.get('/', (req, res) => res.send('Hello World!'))

export default router

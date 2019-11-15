import express from 'express'
import Auth from '../controllers/auth'
import user from '../schemas/user'
const router = express.Router()

const authController = new Auth()

router.get('/', authController.login)
router.post('/', authController.register)

export default router

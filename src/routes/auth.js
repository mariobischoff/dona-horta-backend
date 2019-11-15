import express from 'express'
import Auth from '../controllers/auth'
const router = express.Router()
import user from '../schemas/user'

let authController = new Auth(user)

router.get('/', authController.login)
router.post('/', authController.register)

export default router

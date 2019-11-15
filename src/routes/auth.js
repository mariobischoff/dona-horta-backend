import express from 'express'
import Auth from '../controllers/auth'

const router = express.Router()
const authController = new Auth()

// router.get('/', authController.login)
router.post('/', authController.register)

export default router

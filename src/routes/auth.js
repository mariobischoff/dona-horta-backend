import express from 'express'
import Auth from '../controllers/auth'
const router = express.Router()

router.get('/', Auth.login)
router.post('/', Auth.register)

export default router

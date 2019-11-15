import express from 'express'
import Auth from '../middlewares/auth'
const router = express.Router()

router.get('/', Auth.generateToken)
router.post('/', Auth.generateToken)

export default router

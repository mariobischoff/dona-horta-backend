import express from 'express'
import Auth from '../controllers/auth'
import Schema from '../schemas/user'

var controller = new Auth(Schema)

const router = express.Router()

router.get('/', controller.login)
router.post('/', controller.register)

export default router

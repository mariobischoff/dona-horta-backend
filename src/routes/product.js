import express from 'express'
import controller from '../controllers/product'

const router = express.Router()

router.get('/', (req, res) => res.send('get: /product'))
router.get('/:id', (req, res) => res.send('get: /product/:id'))
router.post('/sell', controller.newSell)

export default router
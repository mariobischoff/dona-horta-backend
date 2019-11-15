import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.send('get: /product'))
router.get('/:id', (req, res) => res.send('get: /product/:id'))
router.post('/sell', (req, res) => res.send('get: /product/sell'))

export default router
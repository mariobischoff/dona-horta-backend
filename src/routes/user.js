import express from 'express'

const router = express.Router()

router.get('/:id', (req, res) => res.send('get: /user/:id'))
router.put('/:id', (req, res) => res.send('put: /user/:id'))
router.delete('/:id', (req, res) => res.send('delete: /user/:id'))

export default router
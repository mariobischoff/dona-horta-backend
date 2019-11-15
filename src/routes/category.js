import express from 'express'

const router = express.Router()

router.get('/:id?', (req, res) => res.send('get: /category/:id?'))
router.post('/', (req, res) => res.send('post: /category/'))
router.put('/:id', (req, res) => res.send('put: /category/:id'))
router.delete('/:id', (req, res) => res.send('delete: /category/:id'))

export default router
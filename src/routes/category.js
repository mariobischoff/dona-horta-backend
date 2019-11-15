import express from 'express'
import controller from '../controllers/category'

var category = express.Router()

category.get('/:id', (req, res) => res.send('entrou'))

export default category
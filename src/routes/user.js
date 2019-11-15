import express from 'express'
import controller from '../controllers/user'

var user = express.Router()

user.get('/:id', (req, res) => res.send('entrou'))

export default user
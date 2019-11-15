import Model from '../models/category'
import schema from '../schemas/category'

module.exports = class Category extends Model {
  constructor () {
    super(schema)
  }

  add (req, res) {
    this.GetOne({ name: req.body.name })
      .then((data) => {
        res.status(400).json({ error: `Existing category ${data.name}` })
      })
      .catch(() => {
        this.Save(req.body)
          .then((data) => {
            res.status(200).json(data)
          })
          .catch((err) => {
            res.status(500).json({ msg: err })
          })
      })
  }

  list (req, res) {
    if (req.params.id) {
      this.GetById(req.params.id)
        .then((data) => {
          if (data) {
            res.json(data)
          } else {
            res.status(404).json({ msg: 'Category Not Found' })
          }
        })
        .catch((err) => {
          res.status(500).json({ msg: err })
        })
    } else {
      this.GetAll()
        .then((data) => {
          res.json(data)
        })
        .catch((err) => {
          res.status(500).json({ msg: err })
        })
    }
  }

  update (req, res) {
    this.UpdateOnlyField(req.params.id, req.body)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.status(500).json({ msg: err })
      })
  }

  remove (req, res) {
    this.Remove(req.params.id)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.status(500).json({ msg: err })
      })
  }
}

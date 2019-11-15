import Model from '../models/product'

module.exports = class Product extends Model {
  constructor (schema) {
    super(schema)
  }

  async newSell (req, res) {
    try {
      const result = await this.save(req.body)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json({ error: error.errmsg })
    }
  }
}
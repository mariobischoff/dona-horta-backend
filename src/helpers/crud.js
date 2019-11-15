import Connection from '../config/dbConnection'

module.exports = class Crud extends Connection {
  constructor(schema) {
    super()
    this.schema = schema
  }
  
  async save (data) {
    await this.start()
    try {
      return await this.schema.create(data)
    } catch (error) {
      return error
    } finally {
      await this.close()
    }
  }

  async update (id, data) {
    await this.start()
    try {
      return await this.schema.findByIdAndUpdate(id, data, { new: true })
    } catch (error) {
      return error
    } finally {
      await this.close()
    }
  }

  async getAll () {
    await this.start()
    try {
      return await this.schema.find()
    } catch (error) {
      return error
    } finally {
      await this.close()
    }
  }

  async getOne (query, select = '') {
    await this.start()
    try {
      return await this.schema.findOne(query).select(select)
    } catch (error) {
      return error
    } finally {
      await this.close()
    }
  }

  async remove (id) {
    await this.start()
    try {
      return await this.schema.findOneAndRemove(id)
    } catch (error) {
      return error
    } finally {
      await this.close()
    }
  }
  
}

<<<<<<< HEAD
=======
import Connection from '../config/dbConnection'

class UserModel extends Connection {
  constructor (schema) {
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
}

export default UserModel
>>>>>>> finish

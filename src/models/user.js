import Connection from '../config/dbConnection'
import schema from '../schemas/user'
class UserModel extends Connection {
  constructor () {
    super()
    this.schema = schema
  }

  async Save (data) {
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

export default new UserModel()

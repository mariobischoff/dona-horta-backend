import Connection from '../config/dbConnection'
import User from '../schemas/user'

class UserModel extends Connection {
  constructor () {
    super()
    this.user = User
  }

  async save (data) {
    await this.start()
    try {
      return await this.user.create(data)
    } catch (error) {
      return error
    } finally {
      await this.close()
    }
  }
}

export default UserModel
import mongoose from 'mongoose'

module.exports = class Connection {

  async start () {
    try {
      await mongoose.connect(process.env.URI_DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
      console.log('DATABASE CONNECTED')
    } catch (e) {
      console.log('DATABASE NOT CONNECTED')
      console.log('erro:' + e)
    }
    return true
  }

  async close () {
    try {
      await mongoose.connection.close()
      console.log('DISCONNECTED')
    } catch (e) {
      console.log(e)
    }
  }
}

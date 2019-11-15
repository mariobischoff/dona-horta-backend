import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  producer: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('user', userSchema)

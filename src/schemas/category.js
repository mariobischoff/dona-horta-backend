import mongoose from 'mongoose'
const Schema = mongoose.Schema

const categorySchema = Schema({
  name: {
      type: String,
      required: true
  }
})

export default mongoose.model('category', categorySchema)

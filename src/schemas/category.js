import mongoose from 'mongoose'
const schema = mongoose.Schema

const categorySchema = schema({
  name: {
    type: String,
    required: true,
  }
})

export default mongoose.model('category', categorySchema)

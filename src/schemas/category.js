<<<<<<< HEAD
=======
import mongoose from 'mongoose'
const schema = mongoose.Schema

const categorySchema = schema({
  name: {
    type: String,
    required: true,
  }
})

export default mongoose.model('category', categorySchema)
>>>>>>> fba32b3f989db6689a37ef52fa6c53fa810b02d6

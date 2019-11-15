import mongoose from 'mongoose'
const schema = mongoose.Schema

const productSchema = schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    refer: 'Category',
    required: true
  },
  measure: {
    type: String,
    enum: ['kg', 'gramas', 'litro', 'unidades'],
    required: true
  },
  producer: {
    type: mongoose.Schema.Types.ObjectId,
    refer: 'User',
    required: true
  },
  organic: {
    type: Boolean,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  origin:{
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  picture: String,
  withdraw: Boolean,
  delivery: Boolean
})

export default mongoose.model('product', productSchema)
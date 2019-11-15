import mongoose from 'mongoose'
const schema = mongoose.Schema

const orderSchema = schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    refer: 'Product',
    required: true
  },
  producer: {
    type: mongoose.Schema.Types.ObjectId,
    refer: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  deliveryType: {
    type: String,
    enum: ['Retirada', 'Entrega'],
    required: true
  },
  withdrawAt: Date
})
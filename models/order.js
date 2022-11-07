const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderItems: [],
  shippingAddress: {
    type: Object
  },
  orderAmount: {
    type: Number,
    required: true
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false
  },
  transactionId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
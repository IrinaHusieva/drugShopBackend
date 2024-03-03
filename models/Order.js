import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
  customer: {
    name: String,
    email: String,
    phone: String,
    address: String,
  },
  items: [{
    name: String,
    quantity: Number,
    price: Number,
  }],
  total: Number,
});
const Order = mongoose.model('Order', orderSchema);
export { Order };
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      productId: String,
      quantity: Number,
    },
  ],
});

export default mongoose.model('Cart', cartSchema);
// This schema defines a cart with a userId and an array of items, where each item has a productId and a quantity.
// You can use this schema to create, read, update, and delete carts in your Mongo
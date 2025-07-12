import mongoose from 'mongoose';

// Define the product schema
// This schema defines the structure of the product documents in the MongoDB collection
const productSchema = new mongoose.Schema({
  image: String,  
  title: String,
  description: String,
  price: Number,
  brand: String,
  rating: Number,
  stock: Number,
});

export default mongoose.model('Product', productSchema);

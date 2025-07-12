import mongoose from 'mongoose';

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

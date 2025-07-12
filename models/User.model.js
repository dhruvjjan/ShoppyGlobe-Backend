import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export default mongoose.model('User', userSchema);

// This code defines a Mongoose schema for a User model with fields for name, email, and password.
// It exports the User model, which can be used to interact with the users collection in a MongoDB database.
// File: server.js
// This file sets up the Express server, connects to MongoDB, and defines the routes for

import express from 'express';
import mongoose from 'mongoose';
import { productRoutes } from './routes/product.routes.js';
import { cartRoutes } from './routes/cart.routes.js';
import { userRoutes } from './routes/user.routes.js';


const app = express(); // Create an instance of Express
mongoose.connect('mongodb+srv://dhruv3352dj:rdcoBmcFvoy0m9CJ@cluster0.65cj1gz.mongodb.net/') // Connect to MongoDB
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:', err);
});

app.use(express.json()); //middleware to parse JSON bodies

// Define the root route
app.get('/', (req, res) => {
    res.send('Welcome to ShoppyGlobe Backend Root route');
});

productRoutes(app);// Register product routes
cartRoutes(app);// Register cart routes
userRoutes(app);// Register user routes

const PORT = 8000; // Define the port for the server to listen on
// Start the server and listen on the specified port
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})





// mongodb+srv://dhruv3352dj:rdcoBmcFvoy0m9CJ@cluster0.65cj1gz.mongodb.net/
// dhruv3352dj
// rdcoBmcFvoy0m9CJ
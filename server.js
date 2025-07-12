import express from 'express';
import mongoose from 'mongoose';
import { productRoutes } from './routes/product.routes.js';
import { cartRoutes } from './routes/cart.routes.js';
import { userRoutes } from './routes/user.routes.js';


const app = express();
mongoose.connect('mongodb+srv://dhruv3352dj:rdcoBmcFvoy0m9CJ@cluster0.65cj1gz.mongodb.net/')
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:', err);
});

app.use(express.json()); //middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('Welcome to ShoppyGlobe Backend Root route');
});

productRoutes(app);
cartRoutes(app);
userRoutes(app);

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})





// mongodb+srv://dhruv3352dj:rdcoBmcFvoy0m9CJ@cluster0.65cj1gz.mongodb.net/
// dhruv3352dj
// rdcoBmcFvoy0m9CJ
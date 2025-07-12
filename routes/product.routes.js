import { getAllProducts, getProductById, postProduct } from "../controllers/product.controller.js";


export function productRoutes(app){

    app.get('/api/products', getAllProducts) // Get all products
    app.get('/api/products/:id', getProductById) // Get product by ID
    app.post('/api/products', postProduct) // Create a new product  
}


import { getAllProducts, getProductById, postProduct } from "../controllers/product.controller.js";


export function productRoutes(app){

    app.get('/api/products', getAllProducts)
    app.get('/api/products/:id', getProductById)
    app.post('/api/products', postProduct)
}


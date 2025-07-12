import ProductModel from "../models/Product.model.js";


// GET /api/products
export async function getAllProducts(req, res) {
    try{
        const products = await ProductModel.find();
        return res.status(200).json(products);
    }
    catch (error) { 
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

// GET /api/products/:id
export async function getProductById(req, res) {
    try{
        const productId = req.params.id;
        const product = await ProductModel.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json(product);
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

// POST /api/products
export async function postProduct(req, res){
    try{
        let {image,title,description,price,brand,rating,stock} = req.body;
        const newProduct = await ProductModel.create({image,title,description,price,brand,rating,stock})
        return res.status(201).json({
            message: "Product created successfully",
            product: newProduct
        });
        
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
} 
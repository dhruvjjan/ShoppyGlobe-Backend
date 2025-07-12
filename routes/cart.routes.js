
import express from "express";
import {addToCart, getCartItems, updateCartItem, removeCartItem, clearCart } from "../controllers/cart.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";


export function cartRoutes(app) {
    const router = express.Router();

    router.post('/', verifyToken, addToCart); // Add item to cart
    router.get('/', verifyToken, getCartItems); // Get all items in the cart
    router.put('/:productId', verifyToken, updateCartItem); // Update item in the cart
    router.delete('/:productId', verifyToken, removeCartItem); // Remove item from the cart
    router.delete('/clear', verifyToken, clearCart); // Clear the cart

    app.use('/api/cart', router);
}
// This code defines the routes for the cart functionality in an Express application.
// It includes routes for adding items to the cart, retrieving cart items, updating cart items, and removing items from the cart.

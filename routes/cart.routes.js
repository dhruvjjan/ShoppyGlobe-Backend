
import express from "express";
import {addToCart, getCartItems, updateCartItem, removeCartItem, clearCart } from "../controllers/cart.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";


export function cartRoutes(app) {
    const router = express.Router();

    router.post('/', verifyToken, addToCart);
    router.get('/', verifyToken, getCartItems);
    router.put('/:productId', verifyToken, updateCartItem);
    router.delete('/:productId', verifyToken, removeCartItem);
    router.delete('/clear', verifyToken, clearCart);

    app.use('/api/cart', router);
}
// This code defines the routes for the cart functionality in an Express application.
// It includes routes for adding items to the cart, retrieving cart items, updating cart items, and removing items from the cart.

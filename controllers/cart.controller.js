import CartModel from "../models/Cart.model.js";

// POST /api/cart
export async function addToCart(req, res) {
  try {
    const { userId, productId, quantity } = req.body;
    let cart = await CartModel.findOne({ userId });

    if (!cart) {
      cart = await CartModel.create({ userId, items: [{ productId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex(item => item.productId === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
      await cart.save();
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

// GET /api/cart?userId=
export async function getCartItems(req, res) {
  try {
    const { userId } = req.query;
    const cart = await CartModel.findOne({ userId });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

// PUT /api/cart/:productId
export async function updateCartItem(req, res) {
  try {
    const { userId, quantity } = req.body;
    const { productId } = req.params;
    const cart = await CartModel.findOne({ userId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    if (itemIndex === -1) return res.status(404).json({ message: "Product not in cart" });

    cart.items[itemIndex].quantity = quantity;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

// DELETE /api/cart/:productId
export async function removeCartItem(req, res) {
  try {
    const { userId } = req.body;
    const { productId } = req.params;
    const cart = await CartModel.findOne({ userId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(item => item.productId !== productId);
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

// DELETE /api/cart/clear
export async function clearCart(req, res) {
  try {
    const userId = req.user.id; // Get userId from token
    const cart = await CartModel.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    if (cart.items.length === 0) {
      return res.status(200).json({ message: "Cart is already empty" });
    }

    cart.items.splice(0, cart.items.length); 
    await cart.save();

    res.status(200).json({ message: "Cart cleared successfully" });
  } 
  catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}



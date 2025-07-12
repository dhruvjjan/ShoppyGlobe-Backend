# 🛍️ ShoppyGlobe Backend API

ShoppyGlobe is a simple e-commerce backend API built using **Node.js**, **Express.js**, and **MongoDB**. It supports product listing, cart management, user registration/login, and secure JWT-based authentication.

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (JSON Web Token)**
- **ThunderClient (for API testing)**

---

## 🛠️ Installation

```bash
git clone https://github.com/dhruvjjan/ShoppyGlobe-Backend.git
cd SHOPPYGLOBE-BACKEND
npm install
```
---

## Running the server

```bash
npm start
```

---

## 📌 API Endpoints

### ✅ Authentication

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| POST   | /api/register | Register a user   |
| POST   | /api/login    | Login and get JWT |

### 🛒 Product

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /api/products      | Get all products  |
| GET    | /api/products/\:id | Get product by ID |
| POST   | /api/products      | Add a new product |

### 🛍️ Cart (🔐 Protected by JWT)

| Method | Endpoint              | Description              |
| ------ | --------------------- | ------------------------ |
| POST   | /api/cart             | Add product to cart      |
| GET    | /api/cart             | Get all items in cart    |
| PUT    | /api/cart/\:productId | Update quantity in cart  |
| DELETE | /api/cart/\:productId | Remove product from cart |
| DELETE | /api/cart/clear       | Clear the cart           |

---

## 📝 Features Covered

✅ Express server setup
✅ MongoDB connection with Mongoose
✅ Product & Cart CRUD
✅ JWT Authentication and protected routes
✅ Proper error handling and validation
✅ Modular code structure with comments
✅ ThunderClient tested

---

## Testing with ThunderClient

All endpoints were tested using ThunderClient (VS Code extension)
✅ Sample Tests:
User Registration/Login
Product CRUD
Add/Update/Delete Cart

---

## 🧪 API Testing Screenshots

### 🔐 User Registration
![Register](./screenshots/api%20register.png)

### 🔐 User Login
![Login](./screenshots/api%20login.png)

### Post Product
![Post Product](./screenshots/api%20post%20product.png)

### 🛍️ Get Products
![Get Products](./screenshots/api%20get%20all%20products.png)

### 🛒 Add to Cart
![Post Cart](./screenshots/api%20post%20cart.png)

### ✏️ Update Cart
![Put Cart](./screenshots/api%20put%20cart.png)

### ❌ Remove Item from Cart
![Delete Cart Item](./screenshots/api%20delete%20by%20id%20cart.png)

---

## 🔗 Author

Dhruv Jain
GitHub -> https://github.com/dhruvjjan



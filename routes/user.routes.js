import { loginUser, registerUser } from "../controllers/user.controller.js"


export function userRoutes(app){

    app.post('/api/register', registerUser) // Register a new user
    app.post('/api/login', loginUser) // Login a user   
}


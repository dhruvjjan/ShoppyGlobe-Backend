import { loginUser, registerUser } from "../controllers/user.controller.js"


export function userRoutes(app){

    app.post('/api/register', registerUser)
    app.post('/api/login', loginUser)
}


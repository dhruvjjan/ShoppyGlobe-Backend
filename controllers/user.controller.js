import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerUser(req, res) {
    try {
        const { name, email, password } = req.body;
        UserModel.findOne({email})
        .then((user)=>{
            if (user){
                return res.status(409).json({message: "User already exists with this email" });
            }
            else{
                UserModel.create({
                    name,
                    email,
                    password: bcrypt.hashSync(password, 10)
                })
                res.status(201).json({ message: "User registered successfully" });
            }
        })

    } catch (error) {
        res.status(500).send({ error: "Error registering user" });
    }
}   

export async function loginUser(req, res) {
    try {
        let {email, password}= req.body
        UserModel.findOne({email})
        .then((user)=>{
            if(!user){
                return res.status(403).json({ message: "User does not exist" });
            }
            let validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
                return res.status(403).json({ message: "Invalid password" });
            }
            var token = jwt.sign({id: user.id}, 'secretKey')
            return res.status(200).json({
                message: "User logged in successfully",
                user: {
                    name: user.name,
                    email: user.email
                },
                accessToken: token
            })
        })
    } catch (error) {
        res.status(500).send({ error: "Error logging in user" });
    }
}
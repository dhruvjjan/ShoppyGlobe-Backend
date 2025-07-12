import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
// This middleware checks if the request has a valid JWT token in the Authorization header.
export function verifyToken(req, res, next) {

    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.user = decoded; // Pass decoded info to next routes
        next();
    });
}

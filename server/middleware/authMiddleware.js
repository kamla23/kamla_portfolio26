import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    // 1. Header se token nikalna
    const token = req.header('x-auth-token');

    // 2. Check agar token nahi hai
    if (!token) {
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    try {
        // 3. Token ko verify karna (vahi JWT_SECRET use karke)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // 4. User data ko request mein add karna taaki aage use ho sake
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ success: false, message: "Token is not valid" });
    }
};

export default authMiddleware;
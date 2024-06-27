import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.sendStatus(401); 
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userEmail = decoded.email;
        next();
    } catch (err) {
        console.error("Error:", err);
        return res.sendStatus(403);
    }
};

export default authenticateToken;

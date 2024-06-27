import jwt from 'jsonwebtoken';

import User from '../model/user.model';


const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.sendStatus(401);
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.sendStatus(401);
        }

        req.user = user;
        next();
    } catch (err) {
        console.error("Error:", err);
        return res.sendStatus(403);
    }
};

export default authenticateToken;
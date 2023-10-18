import express from 'express'
import jwt from 'jsonwebtoken'
import { verifyCredentials } from '../utils/auth'

const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
    const { user, password } = req.body;

    const isValidUser = verifyCredentials({ user, password });

    if(isValidUser) {
        const token = jwt.sign({ user }, process.env.PRIVATE_KEY, {
            expiresIn: '1h',
        }) 
        res.json({ token });
    } else {
        res.status(401).json({ mensaje: 'Credenciales invalidas' });
    }
});

export default authRouter;
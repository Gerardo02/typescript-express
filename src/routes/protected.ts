import express from 'express'
import { verifyToken } from '../utils/auth'

const protectedRouter = express.Router();

protectedRouter.get('/recurso-protegido', verifyToken, (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la ruta protegida',
        usuario: req.body.user,
    });
});

export default protectedRouter;
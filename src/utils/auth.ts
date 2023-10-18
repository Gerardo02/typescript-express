import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { UserCredentials } from "../types";

const users = [
    { user: 'usuario1', password: 'contraseña1' },
    { user: 'usuario2', password: 'contraseña2' },
]

export function verifyCredentials(credentials: UserCredentials) {
    return users.find(
        (u) => u.user === credentials.user && u.password === credentials.password   
    );
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;

    if(authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        const token = authorizationHeader.slice(7);


        jwt.verify(token, process.env.PRIVATE_KEY, (error, decoded) => {
            if(error) {
                return res.status(401).json({ mensaje: 'Token Invalido' })
            }

            const tokenDecoded = decoded as JwtPayload;

            req.body.user = tokenDecoded?.user;
            next(); 
        })
    } else {
        res.status(401).json({ mensaje: 'Token no proporcionado' });
    }
}
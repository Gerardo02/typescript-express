"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.verifyCredentials = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users = [
    { user: 'usuario1', password: 'contraseña1' },
    { user: 'usuario2', password: 'contraseña2' },
];
function verifyCredentials(credentials) {
    return users.find((u) => u.user === credentials.user && u.password === credentials.password);
}
exports.verifyCredentials = verifyCredentials;
function verifyToken(req, res, next) {
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        const token = authorizationHeader.slice(7);
        jsonwebtoken_1.default.verify(token, process.env.PRIVATE_KEY, (error, decoded) => {
            if (error) {
                return res.status(401).json({ mensaje: 'Token Invalido' });
            }
            const tokenDecoded = decoded;
            req.body.user = tokenDecoded === null || tokenDecoded === void 0 ? void 0 : tokenDecoded.user;
            next();
        });
    }
    else {
        res.status(401).json({ mensaje: 'Token no proporcionado' });
    }
}
exports.verifyToken = verifyToken;

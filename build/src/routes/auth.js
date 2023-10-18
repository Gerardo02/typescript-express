"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../utils/auth");
const authRouter = express_1.default.Router();
authRouter.post('/login', (req, res) => {
    const { user, password } = req.body;
    const isValidUser = (0, auth_1.verifyCredentials)({ user, password });
    if (isValidUser) {
        const token = jsonwebtoken_1.default.sign({ user }, process.env.PRIVATE_KEY, {
            expiresIn: '1h',
        });
        res.json({ token });
    }
    else {
        res.status(401).json({ mensaje: 'Credenciales invalidas' });
    }
});
exports.default = authRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../utils/auth");
const protectedRouter = express_1.default.Router();
protectedRouter.get('/recurso-protegido', auth_1.verifyToken, (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la ruta protegida',
        usuario: req.body.user,
    });
});
exports.default = protectedRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3030;
app.use(express_1.default.json());
app.get('/ping', (_, res) => {
    res.send('connected');
});
app.listen(PORT, () => {
    console.log(`Server running on port http://127.0.0.1:${PORT}`);
});

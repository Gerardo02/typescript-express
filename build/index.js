"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./src/routes/auth"));
const protected_1 = __importDefault(require("./src/routes/protected"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3030;
app.use(express_1.default.json());
app.use('/auth', auth_1.default);
app.use('/api', protected_1.default);
app.get('/ping', (_, res) => {
    res.send('connected');
});
app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});

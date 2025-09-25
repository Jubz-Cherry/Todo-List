"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const todoRoutes_js_1 = __importDefault(require("./routes/todoRoutes.js"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(todoRoutes_js_1.default);
(0, db_1.connectDB)();
app.listen(3000, () => {
    console.log("Ta rodando");
});
//# sourceMappingURL=server.js.map
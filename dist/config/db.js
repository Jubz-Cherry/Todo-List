"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = "mongodb://localhost:27017/Todo-List";
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log("MongoDB conectado!");
    }
    catch (err) {
        console.error("Erro ao conectar MongoDB:", err);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=db.js.map
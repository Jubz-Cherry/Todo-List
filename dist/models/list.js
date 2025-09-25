"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});
exports.List = (0, mongoose_1.model)("List", todoSchema);
//# sourceMappingURL=list.js.map
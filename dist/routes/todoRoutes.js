"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoControllers_js_1 = require("../controllers/todoControllers.js");
const routes = (0, express_1.Router)();
routes.get("/todolist", todoControllers_js_1.getTodos);
routes.post("/todolist", todoControllers_js_1.createTodos);
exports.default = routes;
//# sourceMappingURL=todoRoutes.js.map
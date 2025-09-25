"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodos = exports.getTodos = void 0;
const list_js_1 = require("../models/list.js");
const getTodos = async (req, res) => {
    try {
        const todos = await list_js_1.List.find();
        res.json(todos);
    }
    catch (err) {
        res.status(500).json({ message: 'Erro ao buscar atividades' });
    }
};
exports.getTodos = getTodos;
const createTodos = async (req, res) => {
    const { tittle } = req.body;
    if (!tittle) {
        return res.status(400).json({ message: 'O título é obrigatório' });
    }
    try {
        const newList = await list_js_1.List.create({ tittle });
        await newList.save();
        res.status(201).json({ message: 'Atividade criada!' });
    }
    catch (err) {
        res.status(500).json({ message: 'Erro ao criar atividade' });
    }
};
exports.createTodos = createTodos;
//# sourceMappingURL=todoControllers.js.map
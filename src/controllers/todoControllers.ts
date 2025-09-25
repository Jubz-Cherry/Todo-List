
import { Request, Response } from 'express';
import { List } from '../models/list';

export const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await List.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar atividades' });
    }
};

export const createTodos = async (req: Request, res: Response) => {
    
    const { tittle } = req.body;

    if (!tittle) {
        return res.status(400).json({ message: 'O título é obrigatório' });
    }
    try{
        const newList = await List.create({ tittle });
        await newList.save();
        res.status(201).json({ message: 'Atividade criada!' });

    }catch(err){
        res.status(500).json({ message: 'Erro ao criar atividade' });
    }
   
};  
import { Router } from 'express';
import { getTodos, createTodos } from '../controllers/todoControllers';

const routes = Router();

routes.get("/todolist", getTodos)
routes.post("/todolist", createTodos)

export default routes;
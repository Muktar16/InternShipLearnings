import { Router } from 'express';
import { addNewTodo } from '../controllers/todoController';
const router = Router();

router.post('/newtodo',addNewTodo);

export default router;


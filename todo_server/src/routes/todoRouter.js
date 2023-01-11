import { Router } from 'express';
import { addNewTodo ,getAllTodo} from '../controllers/todoController';
const router = Router();

router.post('/newtodo',addNewTodo);
router.get('/getAll',getAllTodo);

export default router;


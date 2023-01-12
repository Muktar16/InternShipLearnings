import { Router } from 'express';
import { addNewTodo ,getAllTodo,updateTodo,addToRecycleBin} from '../controllers/todoController';
const router = Router();

router.post('/newtodo',addNewTodo);
router.get('/getAll',getAllTodo);
router.put('/update/:id',updateTodo);
router.put('/recycleBin/:id',addToRecycleBin);

export default router;


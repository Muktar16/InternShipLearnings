import { Router } from 'express';
import { addNewTodo ,getAllTodo,updateTodo,addToRecycleBin,getRecycleBinList, deleteTodo, restoreTodo, deleteAll} from '../controllers/todoController';
const router = Router();

router.post('/newtodo',addNewTodo);
router.get('/getAll',getAllTodo);
router.get('/getRecycleBinList',getRecycleBinList);
router.put('/update/:id',updateTodo);
router.put('/recycleBin/:id',addToRecycleBin);
router.put('/restore/:id',restoreTodo);
router.delete('/delete/:id',deleteTodo)
router.delete('/deleteAll',deleteAll)

export default router;


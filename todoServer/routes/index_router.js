
import express from 'express';
import { createNewTodo } from '../controllers/todoController.js';
const router = express.Router();


//routing to Faculty controller modules
router.post('/home', createNewTodo);
// router.get("/todoList", facultyController.getAllFaculties);
// router.get('/:todoID');
// router.put('/:todoID');
// router.delete('/:todoID');

export default router;
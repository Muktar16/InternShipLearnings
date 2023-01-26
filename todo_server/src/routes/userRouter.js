import { Router } from 'express';
import { signUp } from '../controllers/userController';
import { signUpValidator } from '../middlewares/validators';
const router = Router();

router.post('/signUp',signUpValidator,signUp);

export default router;
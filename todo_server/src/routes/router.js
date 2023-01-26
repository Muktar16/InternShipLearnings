import { Router } from 'express';
import todoRouter from './todoRouter';
import userRouter from './userRouter'

const router = Router();

router.use('/todo', todoRouter);
router.use('/user',userRouter)

export default router;

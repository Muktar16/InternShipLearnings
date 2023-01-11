import { Router } from 'express';
import todoRouter from './todoRouter';

const router = Router();

router.use('/todo', todoRouter)

export default router;

import { Router } from 'express';
import { authenticate } from '../controllers/authController.js';
const router = Router();

router.post('/authenticate', authenticate)

export default router;
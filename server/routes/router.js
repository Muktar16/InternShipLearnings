import { Router } from 'express';
import { authenticate } from '../controllers/authController.js';
import { addNewFaculty } from '../controllers/facultyController.js';
import { authValidator } from "../middlewares/joi_validators/authValidator.js";
import { facultyValidator } from '../middlewares/joi_validators/facultyValidator.js';

const router = Router();

//admin router
router.post('/authenticate',authValidator, authenticate);
//faculty router
router.post('/addFaculty',facultyValidator,addNewFaculty);

export default router;
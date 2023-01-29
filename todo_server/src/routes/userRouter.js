import { Router } from 'express';
import { signUp,confirmOTP, signIn, resendOTP } from '../controllers/userController';
import { signUpValidator } from '../middlewares/validators';
const router = Router();

router.post('/signUp',signUpValidator,signUp);
router.get('/confirm',confirmOTP);
router.get('/resendOtp/:otp',resendOTP);
router.post('/signin',signIn);


export default router;
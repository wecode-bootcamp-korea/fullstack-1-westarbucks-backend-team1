import express from 'express';
import { signupController } from '../controllers';

const router = express.Router();

router.post('/signup', signupController.userSignUp);
router.post('/login', signupController.userLogin);

export default router;

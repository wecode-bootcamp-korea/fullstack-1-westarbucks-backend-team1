import express from 'express';
import { signupController } from '../controllers';

const router = express.Router();

router.post('/', signupController.userSignUp);

export default router;

import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();

router.get('/', UserController.getUsersList);
router.post('/signup', UserController.postSignUp);
router.post('/login', UserController.postLogIn);

export default router;

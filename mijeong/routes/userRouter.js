import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.get('/', userController.showAllUsers);
router.post('/signup', userController.signUp);
router.post('/login', userController.logIn);

export default router;

import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();

router.get('', UserController.findAllUsers);
router.post('/signup', UserController.signUp);
router.post('/login', UserController.logIn);

export default router;

import express from 'express';
import { UserController } from '../controllers';
import validateToken from '../middlewares/validateToken';

const router = express.Router();

router.get('', UserController.findAllUsers);
router.post('/signup', UserController.signUp);
router.post('/login', UserController.logIn);
router.put('/edit', validateToken, UserController.updateUserInfo);

export default router;

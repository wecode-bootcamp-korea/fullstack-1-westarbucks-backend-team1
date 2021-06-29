import express from 'express';
import { UserController } from '../controllers';
import validateToken from '../middlewares/validateToken';

const router = express.Router();

router.get('/', UserController.findUsersList);
router.post('/signup', UserController.signUp);
router.post('/login', validateToken, UserController.logIn);

export default router;

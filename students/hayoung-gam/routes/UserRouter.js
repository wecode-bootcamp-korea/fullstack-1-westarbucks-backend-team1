import express from 'express';
import { UserController } from '../controllers';
import validateToken from '../middlewares/validateToken';

const router = express.Router();

router.get('/', UserController.getUsersList);
router.post('/signup', UserController.postSignUp);
router.post('/login', validateToken, UserController.postLogIn);

export default router;

import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.get('', userController.showAllUsers);
router.post('/signUp', userController.signUp);
router.post('/login', userController.login);

export default router;

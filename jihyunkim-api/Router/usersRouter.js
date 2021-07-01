import express from 'express';
import { usersController } from '../controllers';

const router = express.Router();

router.get('', usersController.findAllUsers);
router.post('/signup', usersController.userSignUp);
router.post('/login', usersController.userLogin);

export default router;

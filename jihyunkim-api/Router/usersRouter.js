import express from 'express';
import { usersController } from '../controllers';

const router = express.Router();

router.get('', usersController.findAllUsers);
router.post('/signup', usersController.userSignUp);
router.post('/login', usersController.userLogin);
router.put('', usersController.changePassword);
router.put('/update', usersController.changeEmail);

export default router;

import express from 'express';
import { usersController } from '../controllers';
import authenticateToken from '../middleware/verify_jwt';

const router = express.Router();

router.get('', usersController.findAllUsers);
router.post('/signup', usersController.userSignUp);
router.post('/login', usersController.userLogin);
router.put('', authenticateToken, usersController.changePassword);
router.put('/update', authenticateToken, usersController.changeEmail);

export default router;

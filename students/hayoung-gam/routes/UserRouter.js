import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();

router.get('/', UserController.getUsersList);
router.post('/signup', UserController.postSignUp);

export default router;

import express from 'express';
import userSignUp from '../signup';
import allUsers from '../users';
const router = express.Router();

router.post('/users/signup', userSignUp);
router.get('/users', allUsers);

export default router;

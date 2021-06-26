import express from 'express';
import userSignUp from '../signup';
import allUsers from '../users';
import drinksInfoList from '../drinksinfo';
const router = express.Router();

router.post('/users/signup', userSignUp);
router.get('/users', allUsers);
router.get('/drinks', drinksInfoList);

export default router;

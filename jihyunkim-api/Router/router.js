import express from 'express';
import userSignUp from '../signup';
import allUsers from '../users';
import drinksInfo from '../drinks';
const router = express.Router();

router.post('/users/signup', userSignUp);
router.get('/users', allUsers);
router.get('/drinks', drinksInfo);

export default router;

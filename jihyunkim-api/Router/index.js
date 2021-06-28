import express from 'express';
import drinksRouter from './drinksRouter';
import signupRouter from './signupRouter';
import usersRouter from './usersRouter';

const router = express.Router();

router.use('/drinks', drinksRouter);
router.use('/users/signup', signupRouter);
router.use('/users', usersRouter);

export default router;

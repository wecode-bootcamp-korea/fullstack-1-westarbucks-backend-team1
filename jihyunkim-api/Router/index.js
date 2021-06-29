import express from 'express';
import drinksRouter from './drinksRouter';
import usersRouter from './usersRouter';

const router = express.Router();

router.use('/drinks', drinksRouter);
router.use('/users', usersRouter);

export default router;

import express from 'express';
import userRouter from './userRouter';
import drinkRouter from './drinkRouter';

const router = express.Router();

router.use('/users', userRouter);
router.use('/drinks', drinkRouter);

export default router;

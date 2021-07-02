import express from 'express';
import UserRouter from './UserRouter';
import DrinkRouter from './DrinkRouter';

const router = express.Router();

router.use('/users', UserRouter);
router.use('/drinks', DrinkRouter);

export default router;

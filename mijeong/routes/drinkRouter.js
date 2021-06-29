import express from 'express';
import { drinkController } from '../controllers/drinkController';

const router = express.Router();

router.get('/', drinkController.drinksList);

export default router;

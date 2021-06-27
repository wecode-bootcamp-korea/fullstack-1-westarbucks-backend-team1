import express from 'express';
import { DrinkController } from '../controllers';

const router = express.Router();

router.get('/', DrinkController.getDrinksList);

export default router;

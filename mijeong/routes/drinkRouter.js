import express from 'express';
import { drinkController } from '../controllers';

const router = express.Router();

router.get('', drinkController.addDrinksList);

export default router;
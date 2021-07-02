import express from 'express';
import { DrinkController } from '../controllers';

const router = express.Router();

router.get('', DrinkController.findAllDrinks);
router.get('/:id', DrinkController.findDrink);

export default router;

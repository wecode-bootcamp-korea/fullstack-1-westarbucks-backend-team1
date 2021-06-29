import express from 'express';
import { drinksController } from '../controllers';

const router = express.Router();

router.get('/', drinksController.viewAllDrinks);

export default router;

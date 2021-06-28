import express from 'express';
import { drinksController } from '../controllers';

const router = express.Router();

router.get('/', drinksController.drinksInfo);

export default router;

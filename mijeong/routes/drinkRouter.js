import express from 'express';
import { drinkController } from '../controllers';

const router = express.Router();

router.get('/', drinkController.drinksList);

export default router;

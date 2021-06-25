import express from 'express';
import { getDrinksList } from '../controllers/drinksController';

const drinksRouter = express.Router();

drinksRouter.get('/', getDrinksList);

export default drinksRouter;

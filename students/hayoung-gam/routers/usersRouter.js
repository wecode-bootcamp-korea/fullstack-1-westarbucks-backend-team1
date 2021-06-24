import express from 'express';
import { getUsersList, signUp } from '../controllers/usersController';

const usersRouter = express.Router();

usersRouter.get('/', getUsersList);
usersRouter.post('/signup', signUp);

export default usersRouter;

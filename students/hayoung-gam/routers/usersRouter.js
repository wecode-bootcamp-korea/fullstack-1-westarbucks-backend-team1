import express from 'express';
import { signup } from '../controllers/users';

const usersRouter = express.Router();

usersRouter.post('/signup', signup);

export default usersRouter;

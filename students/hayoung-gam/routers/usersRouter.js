import express from 'express';
import { getUsers, signup } from '../controllers/users';

const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.post('/signup', signup);

export default usersRouter;

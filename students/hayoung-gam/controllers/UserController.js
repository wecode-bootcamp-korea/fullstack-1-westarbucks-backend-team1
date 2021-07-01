import { UserService } from '../services';
import jwt from 'jsonwebtoken';

const { JWT_SECRET_KEY } = process.env;

const findAllUsers = async (req, res) => {
  try {
    const users = await UserService.findAllUsers();

    res.status(200).json({ message: 'LIST_ALL_USERS_SUCCESS', users });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    await UserService.signUp(email, password, name);

    res.status(201).json({ message: 'SIGN_UP_SUCCESS', email, name });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    await UserService.logIn(email, password);

    const token = jwt.sign({ email }, JWT_SECRET_KEY, {
      expiresIn: '1d',
    });
    res.status(201).json({ message: 'LOGIN_SUCCESS', token });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { findAllUsers, signUp, logIn };

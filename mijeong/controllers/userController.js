/* eslint-disable no-unused-vars */
import { userService } from '../services';
import jwt from 'jsonwebtoken';

const TOKEN_KEY = '' + process.env.JWT_SECRET_KEY;

const showAllUsers = async(req, res) => {
  try {
    const users = await userService.showAllUsers();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const signUp = async(req, res) => {
  try {
    const { email, name, password } = req.body;

    await userService.signUp(email, name, password);

    res.status(201).json({ email, name});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async(req, res) => {
  try {
    const { email, password } = req.body;

    await userService.login(email, password);

    const token = jwt.sign({ email }, TOKEN_KEY, {expiresIn: 60 * 24});

    res.status(201).json({ message: 'YOU_ARE_SUCCESSFULLY_LOGGED_IN', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { showAllUsers, signUp, login };

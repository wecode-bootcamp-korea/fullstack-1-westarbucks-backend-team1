/* eslint-disable no-unused-vars */
import { usersService } from '../services';
import jwt from 'jsonwebtoken';
const TOKEN_KEY = '' + process.env.SECRET_KEY;

const findAllUsers = async (req, res) => {
  try {
    const users = await usersService.findAllUsers();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const userSignUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    await usersService.userSignUp(email, name, password);

    res.status(201).json({
      message: 'USER_CREATED_SUCCESSFULLY',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    await usersService.userLogin(email, password);

    const token = jwt.sign({ email }, TOKEN_KEY, { expiresIn: '1h' });

    res.status(200).json({ message: 'LOGIN_SUCCESS!', token });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const changePassword = async (req, res) => {
  try {
    const { name, password } = req.body;
    await usersService.updatePassword(name, password);

    res.status(201).json({ message: 'PASSWORD_CHANGED_SUCCESSFULLY' });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const changeEmail = async (req, res) => {
  try {
    const { name, email } = req.body;
    await usersService.updateEmail(name, email);

    res.status(201).json({ message: 'EMAIL_CHANGED_SUCCESSFULLY' });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default {
  findAllUsers,
  userSignUp,
  userLogin,
  changePassword,
  changeEmail,
};

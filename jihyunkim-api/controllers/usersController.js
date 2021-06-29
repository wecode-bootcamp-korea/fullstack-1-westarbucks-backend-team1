/* eslint-disable no-unused-vars */
import { usersService } from '../services';

const viewAllUsers = async (req, res) => {
  try {
    const users = await usersService.viewAllUsers();

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const userSignUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const newUsers = await usersService.userSignUp(req);

    res.status(200).json({ email, name, password });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usersRegister = await usersService.userLogin(req);

    res.status(200).json({ email, password });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { viewAllUsers, userSignUp, userLogin };

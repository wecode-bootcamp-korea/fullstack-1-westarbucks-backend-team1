/* eslint-disable no-unused-vars */
import { userService } from '../services';

const showAllUsers = async(req, res) => {
  try {
    const users = await userService.showAllUsers();

    res.status(201).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const signUp = async(req, res) => {
  try {
    const { email, password, name } = req.body;

    const newUser = await userService.signUp(req);

    res.status(201).json({ email, password, name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const logIn = async(req, res) => {
  try {
    const { email, password, name } = req.body();

    const checkUser = await userService.logIn(req);

    res.status(201).json({ email, password, name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { showAllUsers, signUp, logIn };

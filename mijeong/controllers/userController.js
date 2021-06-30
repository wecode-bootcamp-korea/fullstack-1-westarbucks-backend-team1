/* eslint-disable no-unused-vars */
import { userService } from '../services';

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

    const newUser = await userService.signUp(req);

    res.status(201).json({ email, name, password });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async(req, res) => {
  try {
    const { email, password } = req.body;

    const addUser = await userService.login(req);

    res.status(201).json({ email, password });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { showAllUsers, signUp, login };

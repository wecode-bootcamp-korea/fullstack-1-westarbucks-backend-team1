/* eslint-disable no-unused-vars */
import { userService } from '../services/userService';

const showAllUsers = async(req, res) => {
  try {
    const users = await userService.showAllUsers(req);

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postSignUp = async(req, res) => {
  try {
    const { email, password, name } = req.body();

    const newUser = await userService.postSignUp(req);

    res.status(201).json({ email, password, name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postLogIn = async(req, res) => {
  try {
    const { email, name } = req.body();

    const checkUser = await userService.postLogIn(req);

    res.status(201).json({ email, name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { showAllUsers, postSignUp, postLogIn };

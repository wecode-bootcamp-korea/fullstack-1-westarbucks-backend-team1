/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { userService } from '../services';


const showAllUsers = async(req, res) => {
  try {
    const users = await userService.showAllUsers();
    res.status(200).json({ message: 'USERS_LIST', users });
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

    if (!email || !password){
      const error = new Error('PLZ_FILL_OUT_EVERYTHING');
      error.statusCode = 404;
      throw error;
    } else {
      const token = await userService.login(email, password);
      res.status(201).json({ message: 'YOU_ARE_SUCCESSFULLY_LOGGED_IN', token });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { showAllUsers, signUp, login };

import { UserService } from '../services';

const findUsersList = async (req, res) => {
  try {
    const users = await UserService.findUsersList();

    res.status(200).json({ message: 'LIST_ALL_USERS_SUCCESS', users });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const signUp = async (req, res) => {
  try {
    const { email, name } = req.body;

    const createdNewUser = await UserService.signUp(req);

    res.status(201).json({ message: 'SIGN_UP_SUCCESS', email, name });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, name } = req.body;

    const token = await UserService.logIn(req, res);

    res.status(201).json({ message: 'LOGIN_SUCCESS', email, name, token });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { findUsersList, signUp, logIn };

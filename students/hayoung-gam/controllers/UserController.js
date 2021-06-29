import { UserService } from '../services';

const findUsersList = async (req, res) => {
  try {
    const users = await UserService.findUsersList();

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const signUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const createdNewUser = await UserService.signUp(req);

    res.status(201).json({ email, name, password });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const token = await UserService.logIn(req, res);

    res
      .status(201)
      .json({ email, name, password, message: 'LOGIN SUCCESS', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { findUsersList, signUp, logIn };

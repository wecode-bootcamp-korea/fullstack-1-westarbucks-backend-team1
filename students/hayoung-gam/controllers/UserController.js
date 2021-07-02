import { UserService } from '../services';

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
    let err;

    if (!email && !password) {
      err = new Error('PLEASE_ENTER_YOUR_EMAIL_AND_PASSWORD.');
      err.statusCode = 404;
      throw err;
    } else if (!email) {
      err = new Error('PLEASE_ENTER_YOUR_EMAIL.');
      err.statusCode = 404;
      throw err;
    } else if (!password) {
      err = new Error('PLEASE_ENTER_YOUR_PASSWORD.');
      err.statusCode = 404;
      throw err;
    } else {
      const token = await UserService.logIn(email, password);
      res.status(201).json({ message: 'LOGIN_SUCCESS', token });
    }
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const updateUserInfo = async (req, res) => {
  try {
    const { name } = req.body;
    const { email: tokenEmail } = req.decoded;
    await UserService.updateUserInfo(tokenEmail, name);

    res.status(200).json({ message: 'USER_INFO_UPDATE_SUCCESS' });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { findAllUsers, signUp, logIn, updateUserInfo };

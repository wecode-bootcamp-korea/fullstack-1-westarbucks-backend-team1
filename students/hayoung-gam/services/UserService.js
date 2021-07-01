import { UserDao } from '../models';
import bcrypt from 'bcrypt';

const findAllUsers = async () => {
  return await UserDao.getAllUsers();
};

const signUp = async (email, password, name) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const [isUsedEmail] = await UserDao.checkEmailExists(email);
  if (isUsedEmail[Object.keys(isUsedEmail)[0]]) {
    const err = new Error('THIS_EMAIL_IS_ALREADY_IN_USED.');
    err.statusCode = 409;
    throw err;
  }

  return await UserDao.createUser(email, hashedPassword, name);
};

const logIn = async (email, password) => {
  const checkUserExists = await UserDao.getUser(email);

  if (!checkUserExists) {
    const err = new Error('USER_DOES_NOT_EXISTS.');
    err.statusCode = 404;
    throw err;
  }
  const { password: hashedPassword } = checkUserExists;

  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch) {
    const err = new Error('INCORRECT_PASSWORD.');
    err.statusCode = 401;
    throw err;
  }
};

const updateUserInfo = async (tokenEmail, name) => {
  if (!name) {
    const err = new Error('PLEASE_ENTER_YOUR_NAME.');
    err.statusCode = 404;
    throw err;
  }

  return await UserDao.updateUserName(tokenEmail, name);
};

export default { findAllUsers, signUp, logIn, updateUserInfo };

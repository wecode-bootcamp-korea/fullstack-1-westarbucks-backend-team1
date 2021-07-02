/* eslint-disable no-undef */
import { userDao } from '../models';
import bcrypt from 'bcrypt';

const showAllUsers = async() => {
  return await userDao.showAllUsers();
};

const signUp = async(email, password, name) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPw = await bcrypt.hashSync(password, salt);

  if (!email || !password) {
    const error = new Error('PLZ_INSERT_EVERYTHING_REQUIRED');
    error.statusCode = 400;
    throw error;
  }

  return await userDao.showAllUsers(email, hashedPw, name);
};

const login = async(email, password) => {
  const alreadyUser = await userDao.login(email);
  if (!alreadyUser) {
    const error = new Error('OOPS_PLZ_SIGN_UP_FIRST');
    error.statusCode = 404;
    throw error;
  }

  const { password: hashedPw } = alreadyUser;

  const isVerifiedPW = await bcrypt.compare(password, hashedPw);

  if (!isVerifiedPW){
    const error = new Error('PASSWORD_IS_NOT_CORRECT');
    error.statusCode = 404;
    throw error;
  }

  return await userDao.login(email, password);
};

export default { showAllUsers, signUp, login };

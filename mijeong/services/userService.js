/* eslint-disable no-undef */
import { userDao } from '../models';

const showAllUsers = async() => {
  return await userDao.showAllUsers();
};

const signUp = async() => {
  return await userDao.signUp(req);
};

const logIn = async() => {
  return await userDao.logIn(req);
};

export default { showAllUsers, signUp, logIn };

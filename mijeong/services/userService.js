/* eslint-disable no-undef */
import { userDao } from '../models';

const showAllUsers = async() => {
  return await userDao.showAllUsers();
};

const signUp = async() => {
  return await userDao.signUp(req);
};

const login = async() => {
  return await userDao.login(req);
};

export default { showAllUsers, signUp, login };

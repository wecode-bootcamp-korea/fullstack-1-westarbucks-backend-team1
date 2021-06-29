import { UserDao } from '../models';

const findUsersList = async () => {
  return await UserDao.findUsersList();
};

const signUp = async (req) => {
  return await UserDao.signUp(req);
};

const logIn = async (req, res) => {
  return await UserDao.logIn(req, res);
};

export default { findUsersList, signUp, logIn };

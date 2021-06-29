import { usersDao } from '../models';

const viewAllUsers = async () => {
  return await usersDao.viewAllUsers();
};

const userSignUp = async (req) => {
  return await usersDao.userSignUp(req);
};

const userLogin = async (req) => {
  return await usersDao.userLogin(req);
};

export default { viewAllUsers, userSignUp, userLogin };

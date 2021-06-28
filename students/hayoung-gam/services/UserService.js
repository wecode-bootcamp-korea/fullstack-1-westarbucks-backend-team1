import { UserDao } from '../models';

const getUsersList = async () => {
  return await UserDao.getUsersList();
};

const postSignUp = async (req) => {
  return await UserDao.postSignUp(req);
};

const postLogIn = async (req, res) => {
  return await UserDao.postLogIn(req, res);
};

export default { getUsersList, postSignUp, postLogIn };

import { UserDao } from '../models';

const getUsersList = async () => {
  return await UserDao.getUsersList();
};

const postSignUp = async (req) => {
  return await UserDao.postSignUp(req);
};

export default { getUsersList, postSignUp };

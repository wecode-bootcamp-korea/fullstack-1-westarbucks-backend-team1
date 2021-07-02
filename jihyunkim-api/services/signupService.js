import { signupDao } from '../models';

const userSignUp = async (req) => {
  return await signupDao.userSignUp(req);
};

const userLogin = async (req) => {
  return await signupDao.userLogin(req);
};

export default { userSignUp, userLogin };

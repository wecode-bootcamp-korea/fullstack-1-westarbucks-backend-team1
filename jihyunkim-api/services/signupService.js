import { signupDao } from '../models';

const userSignUp = async (req) => {
  return await signupDao.userSignUp(req);
};

export default { userSignUp };

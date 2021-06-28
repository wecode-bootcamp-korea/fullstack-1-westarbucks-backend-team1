import { usersDao } from '../models';

const allUsers = async () => {
  return await usersDao.allUsers();
};

export default { allUsers };

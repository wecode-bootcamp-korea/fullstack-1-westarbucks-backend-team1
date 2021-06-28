import { usersDao } from '../models';

const viewAllUsers = async () => {
  return await usersDao.viewAllUsers();
};

export default { viewAllUsers };

import { drinkDao } from '../models';

const drinksList = async() => {
  return await drinkDao.drinksList();
};

export default { drinksList };

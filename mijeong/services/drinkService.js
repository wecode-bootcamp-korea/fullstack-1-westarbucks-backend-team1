import { drinkDao } from '../models/drinkDao';

const drinksList = async() => {
  return await drinkDao.drinksList();
};

export default { drinksList };

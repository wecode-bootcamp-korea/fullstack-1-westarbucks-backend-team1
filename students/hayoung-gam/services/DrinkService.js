import { DrinkDao } from '../models';

const getDrinksList = async () => {
  return await DrinkDao.getDrinksList();
};

export default { getDrinksList };

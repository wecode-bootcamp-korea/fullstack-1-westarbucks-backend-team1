import { DrinkDao } from '../models';

const findDrinksList = async () => {
  return await DrinkDao.findDrinksList();
};

export default { findDrinksList };

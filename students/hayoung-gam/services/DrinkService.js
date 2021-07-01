import { DrinkDao } from '../models';

const findAllDrinks = async () => {
  return await DrinkDao.getAllDrinks();
};

export default { findAllDrinks };

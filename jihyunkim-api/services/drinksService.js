import { drinksDao } from '../models';

const findAllDrinks = async () => {
  return await drinksDao.getAllDrinks();
};

export default { findAllDrinks };

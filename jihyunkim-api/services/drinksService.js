import { drinksDao } from '../models';

const viewAllDrinks = async () => {
  return await drinksDao.viewAllDrinks();
};

export default { viewAllDrinks };

import { drinkDao } from '../models';

const addDrinksList = async() => {
  return await drinkDao.addDrinksList();
};

export default { addDrinksList };

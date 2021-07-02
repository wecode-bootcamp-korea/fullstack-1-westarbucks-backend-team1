import { DrinkDao } from '../models';

const findAllDrinks = async () => {
  return await DrinkDao.getAllDrinks();
};

const findDrink = async (id) => {
  const [isDrinkExist] = await DrinkDao.checkDrinkExists(id);

  if (!isDrinkExist[Object.keys(isDrinkExist)[0]]) {
    const err = new Error('DRINK_DATA_DOES_NOT_EXIST');
    err.statusCode = 404;
    throw err;
  }

  return await DrinkDao.getDrink(id);
};

export default { findAllDrinks, findDrink };

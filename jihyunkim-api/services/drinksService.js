import { drinksDao } from '../models';

const drinksInfo = async () => {
  return await drinksDao.drinksInfo();
};

export default { drinksInfo };

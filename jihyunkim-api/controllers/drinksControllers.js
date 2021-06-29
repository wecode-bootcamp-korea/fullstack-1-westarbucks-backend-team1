/* eslint-disable no-unused-vars */
import { drinksService } from '../services';

const viewAllDrinks = async (req, res) => {
  try {
    const drinks = await drinksService.viewAllDrinks();

    res.status(200).json({ drinks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { viewAllDrinks };

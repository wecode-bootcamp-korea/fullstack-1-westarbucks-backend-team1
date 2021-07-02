/* eslint-disable no-unused-vars */
import { drinksService } from '../services';

const findAllDrinks = async (req, res) => {
  try {
    const drinks = await drinksService.findAllDrinks();

    res.status(200).json({ drinks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { findAllDrinks };

import { DrinkService } from '../services';

const findDrinksList = async (req, res) => {
  try {
    const drinks = await DrinkService.findDrinksList();

    res.status(200).json({ drinks });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { findDrinksList };

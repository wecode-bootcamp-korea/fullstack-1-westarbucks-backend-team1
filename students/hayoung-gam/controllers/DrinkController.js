import { DrinkService } from '../services';

const findAllDrinks = async (req, res) => {
  try {
    const drinks = await DrinkService.findAllDrinks();

    res.status(200).json({ drinks });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const findDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const drink = await DrinkService.findDrink(id);

    res.status(200).json({ drink });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { findAllDrinks, findDrink };

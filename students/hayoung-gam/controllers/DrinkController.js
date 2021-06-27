import { DrinkService } from '../services';

const getDrinksList = async (req, res) => {
  try {
    const drinks = await DrinkService.getDrinksList();

    res.status(201).json({ drinks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { getDrinksList };

import { drinkService } from '../services';

const addDrinksList = async(req, res) => {
  try {
    const drinks = await drinkService.addDrinksList;

    res.status(200).json({ drinks });
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
};

export default { addDrinksList };

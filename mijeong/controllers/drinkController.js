import { drinkService } from '../services';

const drinksList = async(req, res) => {
  try {
    const drinks = await drinkService.drinksList;

    res.status(201).json({ drinks });
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
};

export default { drinksList };

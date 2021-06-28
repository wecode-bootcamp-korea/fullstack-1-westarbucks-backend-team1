import { drinksService } from '../services';

const drinksInfo = async (req, res) => {
  try {
    const drinks = await drinksService.drinksInfo();

    res.status(201).json({ drinks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { drinksInfo };

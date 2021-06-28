import { usersService } from '../services';

const viewAllUsers = async (req, res) => {
  try {
    const users = await usersService.viewAllUsers();

    res.status(201).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { viewAllUsers };

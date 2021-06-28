import { usersService } from '../services';

const allUsers = async (req, res) => {
  try {
    const users = await usersService.allUsers();

    res.status(201).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { allUsers };

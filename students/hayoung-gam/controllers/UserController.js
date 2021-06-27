import { UserService } from '../services';

const getUsersList = async (req, res) => {
  try {
    const users = await UserService.getUsersList();

    res.status(201).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postSignUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const createdNewUser = await UserService.postSignUp(req);

    res.status(201).json({ email, name, password });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { getUsersList, postSignUp };

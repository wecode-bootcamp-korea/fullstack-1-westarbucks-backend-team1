/* eslint-disable no-unused-vars */
import { signupService } from '../services';

const userSignUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const newUsers = await signupService.userSignUp(req);

    res.status(201).json({ email, name, password });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { userSignUp };

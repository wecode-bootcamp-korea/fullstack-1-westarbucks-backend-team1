import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsersList = async (req, res) => {
  try {
    const users = await prisma.$queryRaw(`SELECT * FROM users;`);

    res.status(201).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const signUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const user = await prisma.$queryRaw(`
      SELECT * FROM users WHERE email='${email}';
    `);

    if (user.length) {
      res
        .status(400)
        .json({ message: 'THIS_EMAIL_ADDRESS_IS_ALREADY_BEING_USED' });
    }

    const createdUser = await prisma.$queryRaw(
      `INSERT INTO users(email, name, password) VALUES ('${email}', '${name}', '${password}');`
    );

    res.status(201).json({ name, email, password });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

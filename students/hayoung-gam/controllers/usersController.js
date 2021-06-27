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

    const createdNewUser = await prisma.$queryRaw(`
      INSERT INTO users (email, name, password) SELECT '${email}', '${name}', '${password}' WHERE NOT EXISTS (SELECT email FROM users WHERE email='${email}');
    `);

    res.status(201).json({ name, email, password });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

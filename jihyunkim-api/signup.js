/* eslint-disable no-unused-vars */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const userSignUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const user = await prisma.$queryRaw(`
      SELECT * FROM users WHERE email='${email}';
    `);
    if (user.length) {
      res.status(400).json({ message: '이미 존재하는 유저의 정보입니다!' });
    }

    const createdUser = await prisma.$queryRaw(`
        INSERT INTO users(email, name, password) 
        VALUES ('${email}', '${name}','${password}');
      `);

    res.status(201).json({
      message: '사용자가 생성한 정보입니다.',
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default userSignUp;

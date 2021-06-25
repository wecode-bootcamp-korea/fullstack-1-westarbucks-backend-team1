import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const userSignUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const createdUser = await prisma.$queryRaw(`
        INSERT INTO users(email, name, password) 
        VALUES ('${email}', '${name}','${password}');
      `);

    res.status(201).json({
      message: '사용자가 생성한 정보입니다.',
    });
  } catch (err) {
    res.status(500).json({ message: '에러 발생! 에러 발생! ☄️' });
  }
};

export default userSignUp;

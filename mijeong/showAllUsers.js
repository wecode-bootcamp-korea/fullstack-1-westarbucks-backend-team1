import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

const allUsers = async(req, res) => {
  try {
    const users = await prisma.$queryRaw(`
      SELECT * FROM users
    `);

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({message: '🥺아무것도 불러올 수 없어요'});
  }
};

export { allUsers };

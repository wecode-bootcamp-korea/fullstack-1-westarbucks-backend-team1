import prisma from '../prisma';

const allUsers = async () => {
  const users = await prisma.$queryRaw('SELECT * FROM users');

  return users;
};

export default { allUsers };

import prisma from '../prisma';

const viewAllUsers = async () => {
  const users = await prisma.$queryRaw('SELECT * FROM users');

  return users;
};

export default { viewAllUsers };

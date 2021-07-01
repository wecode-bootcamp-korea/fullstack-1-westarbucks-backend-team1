import prisma from '../prisma';

const getAllUsers = async () => {
  return await prisma.$queryRaw(
    `SELECT id, email, name, favorite, created_at FROM users;`
  );
};

const checkEmailExists = async (email) => {
  return await prisma.$queryRaw(`
      SELECT IF (
        EXISTS (
          SELECT email
          FROM users
          WHERE email='${email}'
        ), 1, 0);
    `);
};

const createUser = async (email, hashedPassword, name) => {
  return await prisma.$queryRaw`
    INSERT INTO users (email, password, name)
    SELECT ${email}, ${hashedPassword}, ${name}
    WHERE NOT EXISTS (SELECT email FROM users WHERE email=${email});
  `;
};

const getUser = async (email) => {
  return await prisma.users.findUnique({ where: { email } });
};

const updateUserName = async (tokenEmail, name) => {
  return await prisma.$queryRaw(`
    UPDATE users
    SET name='${name}'
    WHERE email = '${tokenEmail}';
  `);
};

export default {
  getAllUsers,
  checkEmailExists,
  createUser,
  getUser,
  updateUserName,
};

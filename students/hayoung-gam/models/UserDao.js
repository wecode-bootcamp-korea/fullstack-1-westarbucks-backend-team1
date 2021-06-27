import prisma from '../prisma';

const getUsersList = async () => {
  const users = await prisma.$queryRaw(`SELECT * FROM users;`);

  return users;
};

const postSignUp = async (req) => {
  const { email, name, password } = req.body;

  const signUp = await prisma.$queryRaw(`
      INSERT INTO users (email, name, password) SELECT '${email}', '${name}', '${password}' WHERE NOT EXISTS (SELECT email FROM users WHERE email='${email}');
    `);

  return signUp;
};

export default { getUsersList, postSignUp };

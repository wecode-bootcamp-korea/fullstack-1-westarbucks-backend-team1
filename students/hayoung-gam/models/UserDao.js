import prisma from '../prisma';
import bcrypt from 'bcrypt';

const getUsersList = async () => {
  const users = await prisma.$queryRaw(`SELECT * FROM users;`);

  return users;
};

const postSignUp = async (req) => {
  const { email, name, password } = req.body;
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const signUp = await prisma.$queryRaw(`
    INSERT INTO users (email, name, password) SELECT '${email}', '${name}', '${hashedPassword}' WHERE NOT EXISTS (SELECT email FROM users WHERE email='${email}');
  `);

  return signUp;
};

export default { getUsersList, postSignUp };

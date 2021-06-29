import prisma from '../prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import errorGenerator from '../utils/errorGenerator';

const { JWT_SECRET_KEY } = process.env;

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
    INSERT INTO users (email, name, password)
    SELECT '${email}', '${name}', '${hashedPassword}'
    WHERE NOT EXISTS (SELECT email FROM users WHERE email='${email}');
  `);

  return signUp;
};

const postLogIn = async (req, res) => {
  const { email, password } = req.body;

  const userExists = await prisma.users.findUnique({ where: { email } });
  if (!userExists)
    errorGenerator({ statusCode: 404, message: 'USER DOES NOT EXISTS.' });
  const { email: id, password: hashedPassword } = userExists;

  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch)
    errorGenerator({ statusCode: 400, message: 'INCORRECT PASSWORD.' });

  const token = jwt.sign({ id }, JWT_SECRET_KEY, { expiresIn: '7d' });
  return token;
};

export default { getUsersList, postSignUp, postLogIn };

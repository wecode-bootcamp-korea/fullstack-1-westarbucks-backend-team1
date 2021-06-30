import prisma from '../prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { JWT_SECRET_KEY } = process.env;

const findUsersList = async () => {
  const users = await prisma.$queryRaw(
    `SELECT id, email, name, favorite, created_at FROM users;`
  );

  return users;
};

const signUp = async (req) => {
  const { email, name, password } = req.body;
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const [checkUsedEmail] = await prisma.$queryRaw(`
    SELECT IF (
      EXISTS (
        SELECT email
        FROM users
        WHERE email='${email}'
      ), 1, 0);
  `);

  if (checkUsedEmail[Object.keys(checkUsedEmail)[0]]) {
    const err = new Error('THIS_EMAIL_IS_ALREADY_IN_USED.');
    err.statusCode = 409;
    throw err;
  }

  const signedUp = await prisma.$queryRaw`
    INSERT INTO users (email, name, password)
    SELECT ${email}, ${name}, ${hashedPassword}
    WHERE NOT EXISTS (SELECT email FROM users WHERE email=${email});
  `;

  return signedUp;
};

const logIn = async (req, res) => {
  const { email, password } = req.body;

  const userExists = await prisma.users.findUnique({ where: { email } });
  if (!userExists) {
    const err = new Error('USER_DOES_NOT_EXISTS.');
    err.statusCode = 404;
    throw err;
  }
  const { email: id, password: hashedPassword } = userExists;

  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch) {
    const err = new Error('INCORRECT_PASSWORD.');
    err.statusCode = 401;
    throw err;
  }

  const token = jwt.sign({ id }, JWT_SECRET_KEY, { expiresIn: '7d' });
  return token;
};

export default { findUsersList, signUp, logIn };

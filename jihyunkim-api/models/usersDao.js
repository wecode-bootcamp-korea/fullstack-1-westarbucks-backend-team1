/* eslint-disable no-unused-vars */
import prisma from '../prisma';
import bcrypt from 'bcrypt';

const viewAllUsers = async () => {
  const users = await prisma.$queryRaw('SELECT * FROM users');

  return users;
};

const userSignUp = async (req) => {
  const { email, name, password } = req.body;

  if (!email || !password) {
    const error = new Error('PLEASE_INSERT_THE_ESSENTIAL_INFORMATION');
    error.statusCode = 400;
    throw error;
  }

  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const createdUser = await prisma.$queryRaw(`
        INSERT INTO users(email, name, password) 
        VALUES ('${email}', '${name}','${hashedPassword}')
      `);
  return createdUser;
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const usersRegistered = await prisma.users.findUnique({ where: { email } });

  if (!usersRegistered) {
    const error = new Error('USER_INFORMATION_THAT_DOES_NOT_EXIST');
    error.statusCode = 404;
    throw error;
  }

  const { email: id, password: hashedPassword } = usersRegistered;

  const isPasswordVerified = await bcrypt.compare(password, hashedPassword);

  if (!isPasswordVerified) {
    const error = new Error('PASSWORD_DOES_NOT_MATCH');
    error.statusCode = 404;
    throw error;
  }

  return isPasswordVerified;
};

export default { viewAllUsers, userSignUp, userLogin };

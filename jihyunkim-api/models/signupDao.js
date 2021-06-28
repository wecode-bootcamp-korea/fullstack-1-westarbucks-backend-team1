/* eslint-disable no-unused-vars */
import prisma from '../prisma';
import bcrypt from 'bcrypt';

const userSignUp = async (req) => {
  const { email, name, password } = req.body;
  const saltRounds = 10;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const createdUser = await prisma.$queryRaw(`
        INSERT INTO users(email, name, password) 
        VALUES ('${email}', '${name}','${password}')
      `);
  return createdUser;
};

export default { userSignUp };

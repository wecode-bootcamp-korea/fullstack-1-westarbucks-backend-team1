/* eslint-disable no-unused-vars */
import prisma from '../prisma';

const userSignUp = async (req) => {
  const { email, name, password } = req.body;

  const createdUser = await prisma.$queryRaw(`
        INSERT INTO users(email, name, password) 
        VALUES ('${email}', '${name}','${password}')
      `);
  return createdUser;
};

export default { userSignUp };
/* eslint-disable no-unused-vars */
import prisma from '../../prisma';

const showAllUsers = async() => {
  const users = await prisma.$queryRaw(`
      SELECT * FROM users
    `);

  return users;
};

const signUp = async(req) => {
  const { email, password, name } = req.body;

  const user = await prisma.$queryRaw(`
    INSERT INTO users(email, password, name)
    SELECT ('${email}', '${password}', '${name}')
    WHERE NOT EXISTS 
    (SELECT email, password FROM users 
      WHERE email = '${email}' AND password = '${password}')
  `);

  return signUp;
};

const logIn = async(req) => {
  const { email, password, name } = req.body;

  // 해당 이메일 가진 유저 있는지 확인
  const userExists = await prisma.$exists.user({ email });

  if (!userExists) {
    const error = new Error('Oops! Plz Sign Up FIRST!');
    return error;
  }
};

export default { showAllUsers, signUp, logIn };

/* eslint-disable no-unused-vars */
import prisma from '../prisma';

const showAllUsers = async() => {
  const alluser = await prisma.$queryRaw(`
    SELECT * FROM users;
  `);
  return alluser;
};


const signUp = async(email, hashedPw, name) => {

  return await prisma.$queryRaw(`
    INSERT INTO users(email, password, name)
    SELECT '${email}', '${hashedPw}', '${name}'
    WHERE NOT EXISTS 
    (SELECT email FROM users 
      WHERE email = '${email}')
  `);
};

const getEmail = async(email) => {

  return await prisma.users.findUnique({ where: {email} });

};

const getPw = async(password) => {
  return await prisma.$queryRaw(`
  SELECT password FROM usere WHERE password = '${password}`);
};


export default { showAllUsers, signUp, getPw };


/* eslint-disable no-unused-vars */
import prisma from '../prisma';

const showAllUsers = async() => {
  return await prisma.$queryRaw(`
    SELECT * FROM users;
  `);
};

const getEmail = async(email) => {
  return await prisma.$queryRaw(`
  SELECT * FROM users WHERE email = '${email}'`);
};


const createUsers = async(email, name, hashedPw) => {
  return await prisma.$queryRaw(`
    INSERT INTO users(email, name, password)
    SELECT '${email}', '${name}', '${hashedPw}'
    WHERE NOT EXISTS 
    (SELECT email FROM users 
      WHERE email = '${email}')
  `);
};


export default { showAllUsers, getEmail, createUsers};


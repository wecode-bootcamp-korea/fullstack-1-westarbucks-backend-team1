/* eslint-disable no-unused-vars */
import prisma from '../prisma';

const getUsers = async () => {
  return await prisma.$queryRaw('SELECT * FROM users');
};

const getEmail = async (email) => {
  return await prisma.$queryRaw(`
    SELECT email FROM users WHERE email='${email}'`);
};

const getPassword = async (password) => {
  return await prisma.$queryRaw(`
    SELECT password FROM users WHERE password='${password}'`);
};

const createUser = async (email, name, password) => {
  return await prisma.$queryRaw(`
    INSERT INTO 
      users(
        email, 
        name,
        password
      )
    VALUES (
      '${email}',
      '${name}',
      '${password}'
    )
  `);
};

export default { getUsers, getEmail, getPassword, createUser };

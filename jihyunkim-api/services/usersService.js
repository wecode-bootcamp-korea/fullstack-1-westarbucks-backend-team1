/* eslint-disable no-unused-vars */
import { usersDao } from '../models';
import bcrypt from 'bcrypt';

const findAllUsers = async () => {
  return await usersDao.getUsers();
};

const userSignUp = async (email, name, password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const existingEmail = await usersDao.getEmail(email);

  if (existingEmail.length) {
    const error = new Error('error');
    error.statusCode = 409;
    throw error;
  }

  return await usersDao.createUser(email, name, password);
};

const userLogin = async (email, password) => {
  const findUsers = await usersDao.getEmail(email);
  const findUsersbyPassword = await usersDao.getPassword(password);

  if (findUsers.length === 0) {
    const error = new Error('CANNOT_FIND_CORRECT_USER');
    error.statusCode = 404;
    throw error;
  }

  if (findUsersbyPassword.length === 0) {
    const err = new Error('INCORRECT_PASSWORD');
    err.statusCode = 404;
    throw err;
  }

  const { password: hashedPassword } = findUsersbyPassword;

  const comparePassword = await bcrypt.compare(password, hashedPassword);
  if (!comparePassword) {
    const err = new Error('INVALID_PASSWORD');
    err.statusCode = 404;
    throw err;
  }
};

const changePassword = async (name, password) => {
  if (password.length < 5) {
    const error = new Error('TOO_SHORT_PASSWORD');
    error.statusCode = 404;
    throw error;
  }

  return await usersDao.changePassword(name, password);
};

export default { findAllUsers, userSignUp, userLogin, changePassword };

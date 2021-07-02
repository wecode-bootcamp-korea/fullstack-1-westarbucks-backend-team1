/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { userDao } from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const TOKEN_KEY = '' + process.env.JWT_SECRET_KEY;

const showAllUsers = async() => {
  return await userDao.showAllUsers();
};

const signUp = async(email, name, password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPw = await bcrypt.hashSync(password, salt);

  const existingUser = await userDao.getEmail(email);

  if (existingUser.length) {
    const error = new Error('error');
    error.statusCode = 409;
    throw error;
  }

  return await userDao.createUsers(email, name, hashedPw);
};

const login = async(email, password) => {
  const checkUser = await userDao.getEmail(email);
  console.log(checkUser.length);

  if (checkUser.length === 0) {
    const error = new Error('OOPS_PLZ_SIGN_UP_FIRST');
    error.statusCode = 404;
    throw error;
  }

  const { email: emails, password: hashedPw } = checkUser[0];

  const isVerifiedPW = await bcrypt.compare(password, hashedPw);

  if (!isVerifiedPW){
    const error = new Error('PASSWORD_IS_NOT_CORRECT');
    error.statusCode = 401;
    throw error;
  }

  const token = jwt.sign({ emails }, TOKEN_KEY, {expiresIn: 60 * 24});

  return token;
};

export default { showAllUsers, signUp, login };

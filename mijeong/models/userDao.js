/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import prisma from '../prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const TOKEN_KEY = '' + process.env.JWT_SECRET_KEY;

const showAllUsers = async() => {
  const alluser = await prisma.$queryRaw(`
    SELECT * FROM users;
  `);

  return alluser;
};


const signUp = async(req) => {
  const { email, password, name } = req.body;

  if (!email || !password) {
    const error = new Error('PLZ_INSERT_EVERYTHING_REQUIRED');
    error.statusCode = 400;
    throw error;
  }

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPw = bcrypt.hashSync(password, salt);


  const user = await prisma.$queryRaw(`
    INSERT INTO users(email, password, name)
    SELECT '${email}', '${hashedPw}', '${name}'
    WHERE NOT EXISTS 
    (SELECT email FROM users 
      WHERE email = '${email}')
  `);

  return user;
};

const login = async(req, res) => {
  const { email, password } = req.body;

  // 해당 이메일 가진 유저 있는지 확인
  const alreadyUser = await prisma.users.findUnique({ where: {email} });

  if (!alreadyUser) {
    const error = new Error('YOU_RE_NOT_USER_YET');
    error.statusCode = 404;
    throw error;
  }

  const { email: id, password: hashedPw} = alreadyUser;

  const isVerifiedPW = await bcrypt.compare(password, hashedPw);
  if (!isVerifiedPW){
    const error = new Error('PASSWORD_IS_NOT_CORRECT');
    error.statusCode = 404;
    throw error;
  }

  const token = jwt.sign({ id }, TOKEN_KEY, {expiresIn: 60 * 24});
  return token;
};


export default { showAllUsers, signUp, login };


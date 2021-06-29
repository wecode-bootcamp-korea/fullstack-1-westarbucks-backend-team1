/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import prisma from '../prisma';
// import bcrypt from 'bcrypt';

const showAllUsers = async() => {
  console.log('this is dao');
  const alluser = await prisma.$queryRaw('SELECT * FROM users');

  return alluser;
};

const signUp = async(req) => {
  const { email, password, name } = req.body;

  // const saltRounds = 10;

  // const salt = await bcrypt.genSalt(saltRounds);
  // const hashedPw = await bcrypt.hash('hello', salt);
  // console.log(bcrypt.compareSync('hello', hash));


  const user = await prisma.$queryRaw(`
    INSERT INTO users(email, password, name)
    SELECT ('${email}', '${password}', '${name}')
    WHERE NOT EXISTS 
    (SELECT email, password FROM users 
      WHERE email = '${email}' AND password = '${password}')
  `);

  return user;
};


const logIn = async(req) => {
  const { email, password, name } = req.body;

  // 해당 이메일 가진 유저 있는지 확인
  const alreadyUser = await prisma.$exists.user({ email });

  if (!alreadyUser) {
    const error = new Error('Oops! Plz Sign Up FIRST!');
    throw error;
  }

  // const { email: id, password: hashedPw} = alreadyUser;

  // const checkPassword = await bcrypt.compare(password, hashedPw);

  // return checkPassword;
};


export default { showAllUsers, signUp, logIn };

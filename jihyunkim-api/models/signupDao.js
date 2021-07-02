/* eslint-disable no-unused-vars */
import prisma from '../prisma';
import bcrypt from 'bcrypt';

const userSignUp = async (req) => {
  const { email, name, password } = req.body;

  if (!email || !password) {
    const error = new Error('필수 정보를 입력해주세요 ☄️ ');
    error.statusCode = 400;
    throw error;
  }

  const saltRounds = 10;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const createdUser = await prisma.$queryRaw(`
        INSERT INTO users(email, name, password) 
        VALUES ('${email}', '${name}','${password}')
      `);
  return createdUser;
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const usersRegister = await prisma.users.findUnique({ where: { email } });

  if (!usersRegister) {
    const error = new Error('해당 유저 정보가 존재하지 않습니다');
    error.statusCode = 404;
    throw error;
  }

  const { id, password: hashedPassword } = usersRegister;

  const verifypassword = await bcrypt.compare(password, hashedPassword);

  return verifypassword;
};

export default { userSignUp, userLogin };

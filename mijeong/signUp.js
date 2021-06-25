/* eslint-disable no-unused-vars */
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient;

const signUp = async(req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.$queryRaw(`
      SELECT * FROM users WHERE email ='${email}'
    `);

    if (user) {
      res.status(400).json({ message: 'ALREADY_EXCISTING_USER'});
    }

    const userCreated = await prisma.$queryRaw(`
      INSERT INTO users(email, password) VALUES ('${email}', '${password}')
    `);

    res.status(201).json({ message: '회원가입 성공!!'});
  } catch (err) {
    res.status(500).json({message: '🚨ALERT!!!!ALERT!!!!THIS IS ERROR!!!!!🚨'});
  }
};

export { signUp };

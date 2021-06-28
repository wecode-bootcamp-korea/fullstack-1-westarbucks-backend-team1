/* eslint-disable no-unused-vars */
import http from 'http';
import app from './app';
import prisma from '../prisma';

const server = http.createServer(app);
const PORT = process.env.PORT;

const start = async() => {
  try {
    server.listen(PORT, () => console.log(`서버 ${PORT}에서 잘 도는 중!!`));
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
};

start();

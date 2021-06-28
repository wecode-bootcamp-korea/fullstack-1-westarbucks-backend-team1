import http from 'http';
import prisma from './prisma/index.js';
import app from './app';

const server = http.createServer(app);
const PORT = process.env.PORT;

const start = async () => {
  try {
    server.listen(PORT, () => console.log('서버가 잘 돌아가고 있습니다 🔥'));
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
};

start();

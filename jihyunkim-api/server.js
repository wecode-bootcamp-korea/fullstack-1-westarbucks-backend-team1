import http from 'http';
import express from 'express';
import route from './Router/router';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.use('/', route);

const server = http.createServer(app);
const PORT = process.env.PORT;

const start = async () => {
  try {
    server.listen(PORT, () => console.log('서버가 잘 돌아가고 있습니다 🔥'));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();

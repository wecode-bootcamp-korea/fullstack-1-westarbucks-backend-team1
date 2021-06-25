import http from 'http';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import { signUp } from './signUp.js';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post('/users/signup', signUp);

const server = http.createServer(app);

const start = async() => {
  try {
    server.listen(8000, () => console.log('Server is listening on 8000'));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();

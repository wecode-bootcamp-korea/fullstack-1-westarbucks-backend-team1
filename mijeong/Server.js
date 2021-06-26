/* eslint-disable no-unused-vars */
import http from 'http';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import { signUp } from './signUp.js';
import { allUsers } from './showAllUsers.js';
import { drinks } from './drinks.js';
import cors from 'cors';

const prisma = new PrismaClient();


const app = express();
app.use(express.json());

app.use(cors());
app.post('/users/signup', signUp);
app.get('/users', allUsers);
app.get('/drinks', drinks);

const server = http.createServer(app);

const PORT = process.env.PORT;

const start = async() => {
  try {
    server.listen(PORT, () => console.log(`서버 ${PORT}에서 잘 도는 중!!`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();

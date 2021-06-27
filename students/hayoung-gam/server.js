import http from 'http';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import usersRouter from './routers/usersRouter';
import drinksRouter from './routers/drinksRouter';

const prisma = new PrismaClient();

const app = express();
const server = http.createServer(app);
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use('/drinks', drinksRouter);

const start = async () => {
  try {
    server.listen(PORT, () =>
      console.log(`✅ Server is listening on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();

import http from 'http';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import usersRouter from './routers/usersRouter';

const PORT = 8000;
const prisma = new PrismaClient();

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use('/users', usersRouter);

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

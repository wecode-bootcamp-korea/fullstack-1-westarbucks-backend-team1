/* eslint-disable no-undef */
import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.use((req, res) => {
  const { status, message } = err; console.err(err);
  res.status(status || 500).json({ message });
});

export default app;

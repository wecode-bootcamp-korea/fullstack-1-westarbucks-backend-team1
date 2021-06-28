import express from 'express';
import routes from './routes';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const logger = morgan('dev');

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(routes);

app.use((err, req, res, next) => {
  const { status, message } = err;
  console.err(err);
  res.status(status || 500).json({ message });
});

export default app;

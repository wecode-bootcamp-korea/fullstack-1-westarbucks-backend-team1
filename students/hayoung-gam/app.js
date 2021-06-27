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

export default app;

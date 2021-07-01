import express from 'express';
import route from './Router';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const logger = morgan('dev');

app.use(cors());
app.use(express.json());
app.use(route);
app.use(logger);

export default app;

import express from 'express';
import routes from './routes';
import cors from 'cors';
import morgan from 'morgan';
import generalErrorHandler from './utils/generalErrorHandler';

const app = express();
const logger = morgan('dev');

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(routes);

app.use(generalErrorHandler);

export default app;

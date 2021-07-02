/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import routes from './routes';


const app = express();

app.use(express.json());
app.use(routes);


export default app;

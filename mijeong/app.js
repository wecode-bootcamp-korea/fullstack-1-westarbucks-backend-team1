/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import routes from './routes';


const app = express();

app.use(express.json());
app.use(routes);

// app.use((req, res, next) => {
//   res.status(404).send('Sorry cant find that');
// });

export default app;

import express from 'express';
import bodyParser from 'body-parser';
import peopleRoutes from './routes/people';

const app = express();

app.use(bodyParser.json());
app.use('/people', peopleRoutes);

export default app;
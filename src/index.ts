import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';

const app = express();

const PORT = process.env.PORT || 4000;
app.use(
  cors({
    origin: `*`,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listen on port: ${PORT}`);
});

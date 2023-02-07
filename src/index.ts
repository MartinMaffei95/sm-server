import 'dotenv/config';
import express, { NextFunction } from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { router } from './routes';
import { Server } from 'socket.io';
import { RequestIO } from './interfaces/RequestIO';

const app = express();

/* ## using socket IO */
const httpServer = createServer(app);
export const io = new Server(httpServer, { cors: { origin: '*' } });

// ## Connection IO event
io.on('connection', (socket) => {
  // ...
  console.log('conexxixon');
});

const PORT = process.env.PORT || 5000;

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

httpServer.listen(PORT, () => {
  console.log(`Server listen on port: ${PORT}`);
});

import { Request } from 'express';
import { Server } from 'socket.io';

export interface RequestIO extends Request {
  io?: Server;
}

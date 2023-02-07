import { io } from './../index';
import { NextFunction, Request, Response } from 'express';
import { RequestIO } from '../interfaces/RequestIO';

interface RequestExt extends Request {
  user?: string;
}

const socketMiddleware = async (
  req: RequestIO,
  res: Response,
  next: NextFunction
) => {
  try {
    req.io = io;
    return next();
  } catch (e) {
    // handleHttp(res, 'TOKEN_EMPTY', { error: 'TOKEN_EMPTY' });
    console.log(e, 'error');
  }
};

export { socketMiddleware };

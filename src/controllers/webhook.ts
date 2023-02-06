import * as dotenv from 'dotenv';
dotenv.config();
import { Request, response, Response } from 'express';
import { whatsappResponse } from '../services/webhooks.services';

const getMessages = async (req: Request, res: Response) => {
  try {
    const resp = whatsappResponse(req.query);
    res.send(resp);
  } catch (e) {
    // handleHttp(res, 'ERROR_GET_TRANSACTIONS', e);
    res.send('ERRRRRRRRRRRRROR');
  }
};

export { getMessages };

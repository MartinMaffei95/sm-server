import { messengerResponse } from '../services/messenger.service';

import * as dotenv from 'dotenv';
dotenv.config();
import { Request, response, Response } from 'express';

const getMessagesFromMessenger = async (req: Request, res: Response) => {
  try {
    const resp = messengerResponse(req.query);
    return res.send(resp);
  } catch (e) {
    res.send('ERRRRRRRRRRRRROR');
  }
};

export { getMessagesFromMessenger };

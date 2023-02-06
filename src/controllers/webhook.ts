import * as dotenv from 'dotenv';
dotenv.config();
import { Request, response, Response } from 'express';
import { whatsappResponse } from '../services/webhooks.services';

const getMessages = async (req: Request, res: Response) => {
  try {
    const resp = whatsappResponse(req.query);
    res.send(resp);
  } catch (e) {
    res.send('ERRRRRRRRRRRRROR');
  }
};

const notifyWhatsappMessage = async (req: Request, res: Response) => {
  try {
    // const resp = whatsappResponse(req.query);
    console.log(req.body);
    console.log(req?.body?.entry);
    req?.body?.entry[0].map((entry: any) => console.log(entry));
    res.send('Response');
  } catch (e) {
    res.send('ERRRRRRRRRRRRROR');
  }
};

export { getMessages, notifyWhatsappMessage };

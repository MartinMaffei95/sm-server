import {
  WhatsappMessageStatus,
  WhatsappMessage,
} from './../interfaces/WhatsappMessage.interface';
import * as dotenv from 'dotenv';
dotenv.config();
import { Request, response, Response } from 'express';
import { RequestIO } from '../interfaces/RequestIO';
import { whatsappResponse } from '../services/webhooks.services';

const getMessages = async (req: Request, res: Response) => {
  try {
    const resp = whatsappResponse(req.query);
    return res.send(resp);
  } catch (e) {
    res.send('ERRRRRRRRRRRRROR');
  }
};

const notifyWhatsappMessage = async (req: RequestIO, res: Response) => {
  try {
    req?.io?.emit('new-message', { content: req.body });
    console.log('new-message');

    return res.send('resOk');
  } catch (e) {
    console.log(e);
    return res.send('error');
  }
};

export { getMessages, notifyWhatsappMessage };

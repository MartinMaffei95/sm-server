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
    if (req?.body?.content?.entry[0]?.changes[0]?.value?.statuses) {
      req?.io?.emit('message-status-as-change', { content: req.body });
      console.log('message-status-as-change');
      return res.send('resOk');
    } else if (req?.body?.content?.entry[0]?.changes[0]?.value?.messages) {
      req?.io?.emit('new-message', { content: req.body });
      console.log('new-message');
      return res.send('resOk');
    } else if (req?.body?.content?.entry[0]?.value?.statuses) {
      req?.io?.emit('message-status-as-change', { content: req.body });
      console.log('message-status-as-change');
      return res.send('resOk');
    } else if (req?.body?.content?.entry[0]?.value?.messages) {
      req?.io?.emit('new-message', { content: req.body });
      console.log('new-message');
      return res.send('resOk');
    } else {
      return res.send('resOk');
    }
  } catch (e) {
    console.log(e);
    return res.send('error');
  }
};

export { getMessages, notifyWhatsappMessage };

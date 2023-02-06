import * as dotenv from 'dotenv';
dotenv.config();
import { Request, response, Response } from 'express';

const getMessages = async (req: Request, res: Response) => {
  try {
    const qObject: any = req.query;

    // console.log(qObject);
    Object.keys(qObject).map((k) => {
      const newObj = (qObject[k.toString().trim()] = qObject[k]);
      delete qObject[k];
      return newObj;
    });

    if (qObject['hub.verify_token'] === process.env.META_TOKEN) {
      return res.send(qObject['hub.challenge']);
    } else res.send('token errone');
  } catch (e) {
    // handleHttp(res, 'ERROR_GET_TRANSACTIONS', e);
  }
};

export { getMessages };

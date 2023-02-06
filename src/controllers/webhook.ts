import { Request, response, Response } from 'express';

const getMessages = async (req: Request, res: Response) => {
  try {
    console.log(res);
    res.send(req);
  } catch (e) {
    // handleHttp(res, 'ERROR_GET_TRANSACTIONS', e);
  }
};

export { getMessages };

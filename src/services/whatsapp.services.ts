import { Response } from 'express';
import { RequestIO } from '../interfaces/RequestIO';

const onNewMessage = (req: RequestIO, res: Response) => {
  req?.io?.emit('new-message', { content: 'te contesto del server' });
  console.log('new-message');
  return res.send('io OK');
};

export { onNewMessage };

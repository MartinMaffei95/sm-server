import { Request, Response, Router } from 'express';
import { getMessages, notifyWhatsappMessage } from '../controllers/webhook';
import { getMessagesFromMessenger } from '../controllers/messenger';

import { socketMiddleware } from '../middleware/mw';
const router = Router();

router.get('/whatsapp', getMessages);

router.get('/messenger', getMessagesFromMessenger);

router.post('/whatsapp', socketMiddleware, notifyWhatsappMessage);

export { router };

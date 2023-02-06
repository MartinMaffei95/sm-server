import { Request, Response, Router } from 'express';
import { getMessages, notifyWhatsappMessage } from '../controllers/webhook';
const router = Router();

router.get('/whatsapp', getMessages);

router.post('/whatsapp', notifyWhatsappMessage);

export { router };

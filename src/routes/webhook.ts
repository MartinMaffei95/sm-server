import { Request, Response, Router } from 'express';
import { getMessages, notifyWhatsappMessage } from '../controllers/webhook';
import { socketMiddleware } from '../middleware/mw';
const router = Router();

router.get('/whatsapp', getMessages);

router.post('/whatsapp', socketMiddleware, notifyWhatsappMessage);

export { router };

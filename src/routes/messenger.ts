import { Request, Response, Router } from 'express';
import { getMessagesFromMessenger } from '../controllers/messenger';
const router = Router();

router.get('/messenger', getMessagesFromMessenger);

// router.post('/messenger', , notifyWhatsappMessage);

export { router };

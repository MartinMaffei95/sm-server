import { Request, Response, Router } from 'express';
import { getMessages } from '../controllers/webhook';
const router = Router();

router.get('/whatsapp', getMessages);

export { router };

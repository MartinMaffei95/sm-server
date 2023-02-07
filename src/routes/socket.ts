import { Request, Response, Router } from 'express';
import { RequestIO } from '../interfaces/RequestIO';
import { socketMiddleware } from '../middleware/mw';
const router = Router();

router.get('/whatsapp', socketMiddleware, () => {});

export { router };

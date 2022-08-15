import { Router } from 'express';
import {
  getBanarasController,
} from '../controllers/index.js';

const router = Router();
router.get('/banaras', getBanarasController);

export default router;

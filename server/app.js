/* eslint-disable no-underscore-dangle */
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { clientError, serverError } from './controllers/index.js';
import {
  cartRoute,
  generalRoute,
  orderRoute,
  productRoute,
  userRoute,
  wishlistRoute,
  bannerRoute,
  adminRoute,
  brandRoute,
  categoryRoute,
  promoCodeRoute,
} from './routes/index.js';

const app = express();
app.use(cors());

dotenv.config();
const {
  env: { PORT, NODE_ENV },
} = process;
app.set('port', PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.disable('x-powered-by');

if (NODE_ENV === 'development') {
  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Homy Website' });
  });
}

app.use('/api/v1', generalRoute);
app.use('/api/v1', userRoute);
app.use('/api/v1', cartRoute);
app.use('/api/v1', orderRoute);
app.use('/api/v1', productRoute);
app.use('/api/v1', wishlistRoute);
app.use('/api/v1', bannerRoute);
app.use('/api/v1', adminRoute);
app.use('/api/v1', brandRoute);
app.use('/api/v1', categoryRoute);
app.use('/api/v1', promoCodeRoute);

if (NODE_ENV === 'production') {
  // const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  app.use(express.static(__dirname, '..', 'client', 'build'));
  app.get('*', (req, res) => {
    res.sendFile(__dirname, '..', 'client', 'build', 'index.html');
  });
}

app.use(clientError);
app.use(serverError);

export default app;

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
  banarasRoute,
  adminRoute,
} from './routes/index.js';

const app = express();

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
app.use(cors());

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
app.use('/api/v1', banarasRoute);
app.use('/api/v1', adminRoute);

if (NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.json({ message: 'Welcome to Homy Website' });
  });
}

app.use(clientError);
app.use(serverError);

export default app;

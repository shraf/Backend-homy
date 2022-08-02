import dotenv from 'dotenv';
import { jwtVerify, customizedError } from '../utils/index.js';

dotenv.config();

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) res.status(401).json({ status: 401, message: 'You are not authenticated!' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = await jwtVerify(token);
    req.user = decoded;
    next();
  } catch (err) {
    next(customizedError(403, 'Token is not valid!'));
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    // eslint-disable-next-line eqeqeq
    if (req.user.id == req.params.id) {
      next();
    } else {
      res.status(403).json('You are not allowed to do that!');
    }
  });
};

export {
  verifyToken,
  verifyTokenAndAuthorization,
};

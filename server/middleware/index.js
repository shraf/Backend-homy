/* eslint-disable eqeqeq */
import dotenv from 'dotenv';
import { getRolesPermissionsQuery } from '../database/queries/index.js';
import { jwtVerify, customizedError } from '../utils/index.js';

dotenv.config();

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) return res.status(401).json({ status: 401, message: 'You are not authenticated!' });
  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ status: 401, message: 'You are not authenticated!' });
  try {
    const decoded = await jwtVerify(token);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err)
    next(customizedError(403, 'Token is Not Valid'));
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user === undefined) {
      return res.status(403).json({ status: 403, message: 'Token is not valid!' });
    }
    if (req.user.id == req.params.id) {
      next();
    } else {
      res.status(403).json('You are not allowed to do that!');
    }
  });
};
const verifyTokenAndAdminAuthorization = (req, res, next) => {
  verifyToken(req, res, async () => {
    if (req.user === undefined) {
      return res.status(403).json({ status: 403, message: 'Token is not valid!' });
    }
    const { rows: data } = await getRolesPermissionsQuery(req.user?.role);
    try {
      if (req.user.role == 2) {
        return next();
      }
      if (req.user.role != 1 && req.user.role != 2) {
        const pageLink = req.headers.pathname;
        if (data.length) {
          const x = data.find((item) => item.methodname.toLowerCase() === req.method.toLowerCase()
          && item.link === pageLink);
          if (x?.link == pageLink) {
            next();
          } else {
            throw customizedError(403, ' You are not allowed to do that');
          }
        }
      }
    } catch (err) {
      next(err);
    }
  });
};

export {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdminAuthorization,
};

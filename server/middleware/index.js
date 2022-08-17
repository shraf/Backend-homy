/* eslint-disable eqeqeq */
import dotenv from 'dotenv';
import { getRolesPermissionsQuery } from '../database/queries/index.js';
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
    if (req.user.id == req.params.id) {
      next();
    } else {
      res.status(403).json('You are not allowed to do that!');
    }
  });
};
const verifyTokenAndAdminAuthorization = (req, res, next) => {
  verifyToken(req, res, async () => {
    const { rows: data } = await getRolesPermissionsQuery(req.user.role);
    console.log(req.user.role)
    try {
      if (req.user.role == 2) {
        return next();
      }
      if (req.user.role != 1 && req.user.role != 2) {
      //  const pageLink = req.headers && req.headers.referer && req.headers.referer.split('/')[3];
      const pageLink = 'fff';
      console.log(pageLink);
        if (data.length) {
          const x = data.find((item) => item.name.toLowerCase() === req.method.toLowerCase());
          if (x?.page == pageLink) {
            console.log('employee');
            next();
          } else {
            throw customizedError(403, ' You are not allowed to do that');
          }
        }
      }
      throw customizedError(403, 'You are not allowed to do that');
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
// for admin
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1lIjoiYWRtaW4iLCJwaG9uZSI6Iis5NjUxMjM0NTY3OCIsInJvbGUiOjIsImlhdCI6MTY2MDc2NzExOH0.pJOscYqzkl2lVMUIa6dcpEAdn5956q5It9EpSL355QE

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJlbXBsb3llZTFAZ21haWwuY29tIiwibmFtZSI6ImVtcGxveWVlMSIsInBob25lIjoiKzk2NTEyMzQ1Njc4Iiwicm9sZSI6MywiaWF0IjoxNjYwNzY0NDkwfQ.E7Sp_31rQcFHByImHTTIG8CCiUk0-x9D543fO47rvME
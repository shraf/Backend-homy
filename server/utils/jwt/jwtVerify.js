import dotenv from 'dotenv';
import pkg from 'jsonwebtoken';

const { verify } = pkg;

dotenv.config();
const jwtVerify = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});

export default jwtVerify;

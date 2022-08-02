import dotenv from 'dotenv';
import pkg from 'jsonwebtoken';

const { sign } = pkg;

dotenv.config();
const jwtSign = (payload) => new Promise((resolve, reject) => {
  sign(payload, process.env.SECRET_KEY, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

export default jwtSign;

/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ status: err.status, message: err.message });
  } else {
    res.status(500).json({ status: 500, message: 'Internal Server Error' });
  }
};
export default serverError;

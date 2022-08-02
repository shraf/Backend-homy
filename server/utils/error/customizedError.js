const customizedError = (status, msg) => {
  const error = new Error(msg);
  error.status = status;
  return error;
};
export default customizedError;

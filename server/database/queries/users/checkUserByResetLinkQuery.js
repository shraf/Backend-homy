import connection from '../../config/connection.js';

const checkUserByResetLinkQuery = (resetLink) => {
  const sql = {
    text: 'SELECT id, email, password, reset_link FROM users WHERE reset_link =$1',
    values: [resetLink],
  };
  return connection.query(sql);
};
export default checkUserByResetLinkQuery;

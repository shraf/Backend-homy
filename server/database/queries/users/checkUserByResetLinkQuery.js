import connection from '../../config/connection.js';

const checkUserByResetLinkQuery = (resetLink) => {
  const sql = {
    text: 'select id, email, password, reset_link from users where reset_link =$1',
    values: [resetLink],
  };
  return connection.query(sql);
};
export default checkUserByResetLinkQuery;

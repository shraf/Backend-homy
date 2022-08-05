import connection from '../../config/connection.js';

const updateUserPasswordQuery = (newPassword, email) => {
  const sql = {
    text: `UPDATE users
    SET password= $1
    WHERE email = $2
    RETURNING *`,
    values: [newPassword, email],
  };
  return connection.query(sql);
};
export default updateUserPasswordQuery;

import connection from '../../config/connection.js';

const updateUserPasswordQuery = (newPassword, id) => {
  const sql = {
    text: `UPDATE users
    SET password= $1
    WHERE id = $2
    RETURNING *`,
    values: [newPassword, id],
  };
  return connection.query(sql);
};
export default updateUserPasswordQuery;

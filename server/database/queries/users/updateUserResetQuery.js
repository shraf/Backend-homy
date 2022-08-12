import connection from '../../config/connection.js';

const updateUserResetQuery = (resetLink, id) => {
  const sql = {
    text: `UPDATE users
    SET reset_link=$1
    WHERE id =$2
    RETURNING id, name, email, phone, reset_link`,
    values: [resetLink, id],
  };
  return connection.query(sql);
};
export default updateUserResetQuery;

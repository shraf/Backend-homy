import connection from '../../config/connection.js';

const updateUserResetPasswordQuery = (password, id) => {
  const sql = {
    text: `UPDATE users
    SET reset_link= null,
    password= $1
    WHERE id = $2
    RETURNING id,name,email,phone`,
    values: [password, id],
  };
  return connection.query(sql);
};
export default updateUserResetPasswordQuery;

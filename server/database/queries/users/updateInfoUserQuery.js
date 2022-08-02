import connection from '../../config/connection.js';

const updateInfoUserQuery = (name, email, phone, id) => {
  const sql = {
    text: `UPDATE users
    SET name= $1,
        email = $2,
        phone = $3
    WHERE id = $4
    RETURNING id,name,email,phone`,
    values: [name, email, phone, id],
  };
  return connection.query(sql);
};
export default updateInfoUserQuery;

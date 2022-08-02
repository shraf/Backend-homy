import connection from '../../config/connection.js';

const addUserQuery = (name, email, phone, password) => {
  const sql = {
    text: 'INSERT INTO users(name, email, phone, password) VALUES ($1,$2,$3,$4) RETURNING id',
    values: [name, email, phone, password],
  };
  return connection.query(sql);
};
export default addUserQuery;

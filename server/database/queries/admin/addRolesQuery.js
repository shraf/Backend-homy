import connection from '../../config/connection.js';

const addRolesQuery = (role) => {
  const sql = {
    text: 'INSERT INTO roles (role) VALUES ($1) RETURNING id',
    values: [role],
  };
  return connection.query(sql);
};
export default addRolesQuery;

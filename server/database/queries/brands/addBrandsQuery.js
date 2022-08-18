import connection from '../../config/connection.js';

const addBrandsQuery = (name, image) => {
  const sql = {
    text: 'INSERT INTO brands(name,image) VALUES($1,$2) RETURNING *',
    values: [name, image],
  };
  return connection.query(sql);
};
export default addBrandsQuery;
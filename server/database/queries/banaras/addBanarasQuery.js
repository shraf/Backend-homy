import connection from '../../config/connection.js';

const addBanarasQuery = (name, image) => {
  const sql = {
    text: 'INSERT INTO banaras(name,image) VALUES($1,$2) RETURNING *',
    values: [name, image],
  };
  return connection.query(sql);
};
export default addBanarasQuery;

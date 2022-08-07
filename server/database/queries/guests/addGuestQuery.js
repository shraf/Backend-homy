import connection from '../../config/connection.js';

const addGuestQuery = (name, email, phone, city, area, street, block, building) => {
  const sql = {
    text: `INSERT INTO guests (name, email, phone, city, area, street, block, building) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
    values: [name, email, phone, city, area, street, block, building],
  };
  return connection.query(sql);
};
export default addGuestQuery;

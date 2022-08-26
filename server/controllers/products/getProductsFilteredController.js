/* eslint-disable eqeqeq */
import connection from '../../database/config/connection.js';
import { customizedError, filterSchema } from '../../utils/index.js';

const getProductsFilteredController = async (req, res, next) => {
  try {
    const { categoryId, place } = req.query;
    let { page } = req.query;
    const {
      filter: { maxPrice, minPrice, brands, subCategory },
    } = await filterSchema.validate(req.body, { abortEarly: false });
    const smallLettersBrands = brands?.map((brand) => brand.toLowerCase());
    const parseArrayForSqlQuery = (stringArray) => {
      let returnString = '';
      stringArray.forEach((value, index) => {
        if (index > 0) {
          returnString += ', ';
        }
        returnString += `'${value}'`;
      });
      return returnString;
    };
    if (page == undefined) {
      page = 1;
    }
    const selections = `SELECT p.id,p.name,p.image,p.albums, p.price,
    p.description, p.category_id,p.sub_category_id,
     p.brand,p.quick_overview,p.discount,p.inStock,p.archived
    FROM products as p
    join categories as c
    ON p.category_id = c.id
    `;
    const limit = (limit1) => `LIMIT ${limit1}`;
    const offset = (pageValue) => `OFFSET ${(pageValue - 1) * 4}`;
    const categoryIdValue = (num) => `c.id = ${num}`;
    const placeValue = (num) => `c.place IN (${num})`;
    const subCategoryId = (num) => `p.sub_category_id = ${num}`;
    const brandsValue = (num) => `LOWER(p.brand) IN (${num})`;
    const conditions = [];
    let query = `${selections} GROUP BY p.id,c.id HAVING p.price BETWEEN ${minPrice} AND ${maxPrice}
      AND p.archived = FALSE ${limit(4)} ${offset(req.query.page)}`;
    let queryLength = `SELECT p.id FROM products as p join categories as c ON p.category_id = c.id 
                       GROUP BY p.id,c.id HAVING p.price BETWEEN ${minPrice} AND ${maxPrice}
                       AND p.archived = FALSE`;
    if (categoryId != undefined) {
      conditions.push(categoryIdValue(categoryId));
    }
    if (subCategory != 0) {
      conditions.push(subCategoryId(subCategory));
    }
    if (place == 'in' || place == 'out') {
      const value = parseArrayForSqlQuery([place]);
      conditions.push(placeValue(value));
    }
    if (brands.length != 0) {
      const value = parseArrayForSqlQuery(smallLettersBrands);
      conditions.push(brandsValue(value));
    }
    if (conditions.length >= 1) {
      const conditionsJoin = conditions.join(' AND ');
      query = `${selections} GROUP BY p.id,c.id HAVING p.price BETWEEN ${minPrice} AND ${maxPrice} AND p.archived = FALSE AND ${conditionsJoin} ${limit(
        4
      )} ${offset(page)}`;
      queryLength = `SELECT p.id FROM products as p
      join categories as c
      ON p.category_id = c.id 
      GROUP BY p.id,c.id HAVING p.price BETWEEN ${minPrice} AND ${maxPrice} AND p.archived = FALSE AND ${conditionsJoin}`;
    }
    const { rowCount: productsLength } = await connection.query(queryLength);
    const { rows: products } = await connection.query(query);
    res.json({
      productsLength,
      products,
      status: 200,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default getProductsFilteredController;

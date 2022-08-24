import { getCategoriesQuery, getProductsQuery, getUsersAndEmployeesQuery } from '../../database/queries/index.js';

const getStatisticsController = async (req, res, next) => {
  try {
    const { rows } = await getUsersAndEmployeesQuery();
    const users = rows.filter((user) => user.roleid === 1);
    const employees = rows.filter((user) => user.roleid !== 1 && user.roleid !== 2);
    const { rows: products } = await getProductsQuery(false);
    const { rows: categories } = await getCategoriesQuery(false);
    res.json({
      message: 'Successfully retrieved All data',
      status: 200,
      data: {
        users: users.length,
        employees: employees.length,
        products: products.length,
        categories: categories.length,
      },
    });
  } catch (error) {
    next(error);
  }
};
export default getStatisticsController;

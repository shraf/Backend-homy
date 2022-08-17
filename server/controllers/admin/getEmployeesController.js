import { getEmployeesQuery } from '../../database/queries/index.js';

const getEmployeesController = async (req, res, next) => {
  try {
    const { rows } = await getEmployeesQuery();
    res.json({ message: 'Successfully retrieved All Employees ', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getEmployeesController;

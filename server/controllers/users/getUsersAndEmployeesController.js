import { getUsersAndEmployeesQuery } from '../../database/queries/index.js';

const getUsersAndEmployeesController = async (req, res, next) => {
  try {
    const { rows } = await getUsersAndEmployeesQuery();
    res.json({ message: 'Successfully retrieved All users ', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getUsersAndEmployeesController;

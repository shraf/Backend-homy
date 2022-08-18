import { getRolesQuery } from '../../database/queries/index.js';

const getRolesController = async (req, res, next) => {
  try {
    const { rows } = await getRolesQuery();
    res.json({ message: 'Successfully retrieved All Roles ', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getRolesController;

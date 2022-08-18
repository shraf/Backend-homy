import { getPermissionsQuery } from '../../database/queries/index.js';

const getPermissionsController = async (req, res, next) => {
  try {
    const { rows } = await getPermissionsQuery();
    res.json({ message: 'Successfully retrieved All Permissions ', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getPermissionsController;

/* eslint-disable eqeqeq */
import { checkUsersByRoleIdQuery, deleteRoleQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';

const deleteRoleController = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id == 2) {
      throw customizedError(400, 'You Can\'t deleted admin role');
    }
    const { rowCount: users } = await checkUsersByRoleIdQuery(id);
    if (users) {
      throw customizedError(
        400,
        'There have users take this role please change roles for this user and the deleted it',
      );
    }
    const { rows, rowCount } = await deleteRoleQuery(id);
    if (!rowCount) {
      throw customizedError(400, 'There have error try again later');
    }
    res.json({ message: 'Successfully delete Role', status: 200, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

export default deleteRoleController;

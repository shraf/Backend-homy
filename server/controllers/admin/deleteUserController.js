/* eslint-disable eqeqeq */
import { deleteUserQuery, getUserByIdQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';

const deleteUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows: user } = await getUserByIdQuery(id);
    if (user[0].role_id == 2) {
      throw customizedError(400, 'You Can\'t deleted admin');
    }
    const { rows, rowCount } = await deleteUserQuery(id);
    if (!rowCount) {
      throw customizedError(400, 'There have error try again later');
    }
    res.json({ message: 'Successfully delete User Or Employee', status: 200, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

export default deleteUserController;

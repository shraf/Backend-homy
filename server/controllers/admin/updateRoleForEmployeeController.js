import { updateRoleForEmployeeQuery } from '../../database/queries/index.js';
import { customizedError, roleIdSchema } from '../../utils/index.js';

const updateRoleForEmployeeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { roleId } = await roleIdSchema.validate(req.body, {
      abortEarly: false,
    });
    const { rows: data } = await updateRoleForEmployeeQuery(roleId, id);
    res.json({
      message: 'You have been successfully updated role for employee',
      status: 200,
      data,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};
export default updateRoleForEmployeeController;

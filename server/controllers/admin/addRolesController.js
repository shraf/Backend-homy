
import { addRolesPermissionsQuery, addRolesQuery, checkRoleExistsQuery } from '../../database/queries/index.js';
import { customizedError, rolesSchema } from '../../utils/index.js';

const addRolesController = async (req, res, next) => {
  try {
    const {
      name, permissionPage,
    } = await rolesSchema.validate(req.body, { abortEarly: false });
    const { rowCount: roleNameId } = await checkRoleExistsQuery(name.toLocaleLowerCase());
    if (roleNameId) {
      throw customizedError(400, 'Role name already exists');
    }
    const { rows: role } = await addRolesQuery(name.toLocaleLowerCase());
    if (!role.length) {
      throw customizedError(400, 'there have error try again later');
    }
    const roleId = role[0].id;
    permissionPage.forEach(async ({ permissionId, pageId }) => {
      const { rowCount } = await addRolesPermissionsQuery(roleId, permissionId, pageId);
      if (!rowCount) {
        throw customizedError(400, 'Role permission not added Try agin later');
      }
    });
    res.status(201).json({
      message: 'You have been successfully added role and permissions',
      status: 201,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addRolesController;

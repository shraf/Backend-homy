import { getRolesPermissionsQuery } from '../../database/queries/index.js';

const getPermissionsByRoleIdController = async (req, res, next) => {
  try {
    const { roleId } = req.query;
    const { rows } = await getRolesPermissionsQuery(roleId);
    res.json({ message: 'Successfully retrieved All Permissions For This role ', status: 200, data: rows });
  } catch (error) {
    next(error);
  }
};

export default getPermissionsByRoleIdController;

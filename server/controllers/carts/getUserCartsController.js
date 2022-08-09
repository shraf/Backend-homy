import { getUserCartsQuery } from '../../database/queries/index.js';

const getUserCartsController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows: carts } = await getUserCartsQuery(id);
    res.json({ message: 'Successfully retrieved User Carts', data: carts });
  } catch (error) {
    next(error);
  }
};

export default getUserCartsController;

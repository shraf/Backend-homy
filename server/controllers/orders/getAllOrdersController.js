import { getAllOrdersJoinGuestsQuery, getAllOrdersJoinUsersQuery } from '../../database/queries/index.js';
// getAllOrdersJoinUsersQuery,
// getAllOrdersJoinGuestsQuery,

const getAllOrdersController = async (req, res, next) => {
  try {
    const { rows: userOrder } = await getAllOrdersJoinUsersQuery();
    const { rows: guestOrder } = await getAllOrdersJoinGuestsQuery();
    const allOrders = userOrder.concat(guestOrder);
    res.json({ message: 'Successfully retrieved Orders', status: 200, data: allOrders });
  } catch (error) {
    next(error);
  }
};

export default getAllOrdersController;

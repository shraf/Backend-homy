import { getAllOrdersJoinGuestsQuery, getAllOrdersJoinUsersQuery, getProductByIdWithCategoryQuery } from '../../database/queries/index.js';

const getAllOrdersController = async (req, res, next) => {
  try {
    const { rows: userOrder } = await getAllOrdersJoinUsersQuery();
    const { rows: guestOrder } = await getAllOrdersJoinGuestsQuery();
    const allOrders = userOrder.concat(guestOrder);
    const result = allOrders.map(async (order)=>{
      const orderProducts = [];
      await Promise.all(
        order.products.map(async (product) => {
          const { rows: productById } = await getProductByIdWithCategoryQuery(
            Number(product[0]),
          );
          const contents = await {
            image: productById[0].image,
            name: productById[0].productname,
            categoryName: productById[0].categoryname,
            quantity: product[1],
            price: product[2],
            discount: product[3],
          };
          orderProducts.push(contents);
        }),
      );
      return { ...order, orderProducts };
    });
    const orders = await Promise.all(result);
    res.json({ message: 'Successfully retrieved Orders', status: 200, data: orders });
  } catch (error) {
    next(error);
  }
};

export default getAllOrdersController;

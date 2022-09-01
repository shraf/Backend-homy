import {
  getProductByIdWithCategoryQuery,
  getSingleOrderQuery,
} from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';

const getSingleUserOrderController = async (req, res, next) => {
  try {
    const { name, phone } = req.user;
    const { orderNumber } = req.params;
    const { rows } = await getSingleOrderQuery(orderNumber, req.user.id, null);
    const orderProducts = [];
    await Promise.all(
      rows[0].products.map(async (product) => {
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
    if (!rows.length) {
      throw customizedError(400, 'There have error whit order number');
    }
    const orderData = { ...rows[0], name, phone, orderProducts };
    res.json({
      message: 'Successfully retrieved Single Order',
      status: 200,
      data: orderData,
    });
  } catch (error) {
    next(error);
  }
};

export default getSingleUserOrderController;

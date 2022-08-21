import { updateProductQuery } from '../../database/queries/index.js';
import { customizedError, productSchema } from '../../utils/index.js';

const updateProductController = async (req, res, next) => {
  try {
    const { id } = req.body;
    const {
      name,
      price,
      image,
      albums,
      description,
      quickOverview,
      discount,
      shipment,
      brand,
      inStock,
      subCategoryId,
      categoryId,
    } = await productSchema.validate(req.body, { abortEarly: false });
    const { rows: data } = await updateProductQuery(
      name,
      price,
      image,
      albums,
      description,
      quickOverview,
      discount,
      shipment,
      brand,
      inStock,
      subCategoryId,
      categoryId,
      id,
    );
    res.json({
      message: 'You have been successfully updated product',
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

export default updateProductController;

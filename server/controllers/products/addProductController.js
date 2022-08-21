/* eslint-disable prefer-const */
import { addProductQuery } from '../../database/queries/index.js';
import { customizedError, productSchema } from '../../utils/index.js';

const addProductController = async (req, res, next) => {
  try {
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
    const { rows: data } = await addProductQuery(
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
    );
    res.status(201).json({
      message: 'You have been successfully added product',
      status: 201,
      data,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default addProductController;

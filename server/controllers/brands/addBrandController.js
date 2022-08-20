import { addBrandsQuery } from '../../database/queries/index.js';
import { brandsSchema, customizedError } from '../../utils/index.js';

const addBrandController = async (req, res, next) => {
  try {
    const { name, image } = await brandsSchema.validate(req.body, {
      abortEarly: false,
    });
    const { rows: data } = await addBrandsQuery(name, image);
    res.status(201).json({
      message: 'You have been successfully added brand',
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
export default addBrandController;

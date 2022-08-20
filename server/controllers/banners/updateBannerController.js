import { updateBannerQuery } from '../../database/queries/index.js';
import { brandsSchema, customizedError } from '../../utils/index.js';

const updateBannerController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, image } = await brandsSchema.validate(req.body, {
      abortEarly: false,
    });
    const { rows: data } = await updateBannerQuery(name, image, id);
    res.json({
      message: 'You have been successfully updated banner',
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
export default updateBannerController;

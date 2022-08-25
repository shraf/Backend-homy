import { updateInfoUserQuery } from '../../database/queries/index.js';
import { updateUserSchema, customizedError } from '../../utils/index.js';

const updateInfoUserController = async (req, res, next) => {
  try {
    const { id } = req.params
    const {
      email, name, phone,
    } = await updateUserSchema.validate(req.body, { abortEarly: false });
    const { rows, rowCount } = await updateInfoUserQuery(name, email, phone, id);
    if (!rowCount) {
      throw customizedError(400, 'there have error try again later');
    }
    res.json({ message: 'Your data updated successfully', status: 200, data: rows[0] });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default updateInfoUserController;

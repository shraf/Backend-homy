import { updateInfoUserQuery } from '../../database/queries/index.js';
import { updateUserSchema, customizedError } from '../../utils/index.js';

const updateInfoUserController = async (req, res, next) => {
  try {
    const {
      email, name, phone,
    } = await updateUserSchema.validate(req.body, { abortEarly: false });
    await updateInfoUserQuery(name, email, phone, req.params.id);
    res.json({ message: 'Your data updated successfully', status: 200 });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customizedError(400, error.errors[0]));
    }
    next(error);
  }
};

export default updateInfoUserController;

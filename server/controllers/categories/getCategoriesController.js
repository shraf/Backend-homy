import { getCategoriesQuery } from '../../database/queries/index.js';

const getCategoriesController = async (req, res, next) => {
  try {
    const { place } = req.query;
    const { rows } = await getCategoriesQuery(false);
    if (place === 'in') {
      const indoor = rows.filter((row) => row.place === 'in');
      res.json({ message: 'Successfully retrieved indoor categories', status: 200, data: indoor });
    } else if (place && place === 'out') {
      const outdoor = rows.filter((row) => row.place === 'out');
      res.json({ message: 'Successfully retrieved outdoor categories', status: 200, data: outdoor });
    } else {
      res.json({ message: 'Successfully retrieved all categories', status: 200, data: rows });
    }
  } catch (error) {
    next(error);
  }
};

export default getCategoriesController;

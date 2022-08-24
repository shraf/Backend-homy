import { getOrderByMonthQuery } from '../../database/queries/index.js';
import { customizedError } from '../../utils/index.js';

const getOrderByMonthsController = async (req, res, next) => {
  try {
    const { rows } = await getOrderByMonthQuery();
    const days = rows.map(({ day }) => day);
    const freqMap = new Map();
    const size = days.length;

    for (let i = 0; i < size; i += 1) {
      if (freqMap.has(days[i])) {
        freqMap.set(days[i], freqMap.get(days[i]) + 1);
      } else {
        freqMap.set(days[i], 1);
      }
    }
    const daysForMonth = [];
    const numberOfRequest = [];
    if (!freqMap.size) {
      throw customizedError(400, 'There is no orders for this day');
    }
    freqMap.forEach((value, key) => {
      daysForMonth.push(key);
      numberOfRequest.push(value);
    });
    res.json({
      message: 'Successfully retrieved all orders for this month', status: 200, daysForMonth, numberOfRequest,
    });
  } catch (error) {
    next(error);
  }
};

export default getOrderByMonthsController;

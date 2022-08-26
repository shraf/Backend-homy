import { object, number } from 'yup';

const discountSchema = object({
  discount: number().required('discount is required '),
});

export default discountSchema;

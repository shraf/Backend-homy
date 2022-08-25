import { object, string } from 'yup';

const promoCodeSchema = object({
  name: string().required('Name is required'),
  discount: string().required('Discount is required'),
});
export default promoCodeSchema;

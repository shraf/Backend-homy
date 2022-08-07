import { object, string } from 'yup';

const singleOrderSchema = object({
  email: string().email('Your email must be a valid email').required('Your email is required'),
  orderNumber: string().required('Your order number is required'),
});

export default singleOrderSchema;

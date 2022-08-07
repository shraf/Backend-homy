import { object, string } from 'yup';

const singleOrderSchema = object({
  email: string().email('Your email must be a valid email').required('Your email is required to register'),
  orderNumber: string().required('Your phone number is required'),
});

export default singleOrderSchema;

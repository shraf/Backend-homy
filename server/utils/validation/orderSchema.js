import { array, number, object, string } from 'yup';

const orderSchema = object({
  email: string().email('Your email must be a valid email').required('Your email is required'),
  name: string().required('Name is required'),
  orderNumber: string().required('Your phone number is required'),
  payment: string().required('Your Payment Method is required'),
  products: array().required('Your products is required'),
  addresses: array().of(array()).required('Your addresses is required'),
  amount: number().required('your amount is required'),
});

export default orderSchema;

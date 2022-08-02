import { object, string } from 'yup';

const updateUserSchema = object({
  name: string().required('Name is required'),
  email: string().email('Your email must be a valid email').required('Your email is required to register'),
  phone: string().min(12, 'your phone number must be 12 digits').required('Your phone number is required'),
});

export default updateUserSchema;

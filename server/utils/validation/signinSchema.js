import { object, string } from 'yup';

const signInSchema = object({
  email: string().email('Your email must be a valid email').required('Your email is required to register'),
  password: string().min(8, 'Your password must be 8 digits at least').required('Password is required'),
});

export default signInSchema;

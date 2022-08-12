import { object, string } from 'yup';

const emailSchema = object({
  email: string().email('Your email must be a valid email').required('Your email is required to register'),
});

export default emailSchema;

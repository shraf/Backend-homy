import { object, string, number } from 'yup';

const employeeSchema = object({
  name: string().required('Name is required'),
  email: string().email('Your email must be a valid email').required('Your email is required to register'),
  phone: string().min(12, 'your phone number must be 12 digits').required('Your phone number is required'),
  password: string().min(8, 'Your password must be 8 digits at least').required('Password is required'),
  roleId: number().required('Role is required'),
});

export default employeeSchema;

import { object, string } from 'yup';

const resetPasswordSchema = object({
  newPassword: string().min(8, 'Your password must be 8 digits at least').required('New Password is required'),
});

export default resetPasswordSchema;

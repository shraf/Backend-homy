import { object, string } from 'yup';

const passwordSchema = object({
  newPassword: string().min(8, 'Your password must be 8 digits at least').required('New Password is required'),
  oldPassword: string().min(8, 'Your password must be 8 digits at least').required('Old Password is required'),
});

export default passwordSchema;

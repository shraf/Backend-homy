import { object, number } from 'yup';

const roleIdSchema = object({
  roleId: number().required('Rate is required'),
});

export default roleIdSchema;

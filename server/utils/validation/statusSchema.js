import { object, string } from 'yup';

const statusSchema = object({
  status: string().required('Your Status is required'),
});

export default statusSchema;

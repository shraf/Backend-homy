import { object, number } from 'yup';

const idAddressSchema = object({
  id: number().required('id is required '),
});

export default idAddressSchema;

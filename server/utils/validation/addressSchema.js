import { object, string } from 'yup';

const addressSchema = object({
  city: string().required('City is required'),
  area: string().required('Area is required'),
  street: string().required('Street is required'),
  block: string().required('Block is required'),
  building: string().required('Building Number is required'),
});

export default addressSchema;

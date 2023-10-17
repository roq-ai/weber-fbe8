import * as yup from 'yup';

export const publicationValidationSchema = yup.object().shape({
  title: yup.string().required(),
  publication_date: yup.date().nullable(),
  publisher: yup.string().required(),
  user_id: yup.string().nullable().required(),
  research_id: yup.string().nullable().required(),
});

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, 'Imię może zawierać tylko litery i spacje')
      .min(3, 'Za krótkie!')
      .max(50, 'Za długie!')
      .required('Imię jest wymagane'),
    number: Yup.string()
      .matches(/^[0-9]+$/, 'Numer telefonu może zawierać tylko cyfry')
      .min(6, 'Numer telefonu jest za krótki')
      .max(20, 'Numer telefonu jest za długi')
      .required('Numer telefonu jest wymagany'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label>Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="div" />

        <label>Number</label>
        <Field name="number" type="text" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

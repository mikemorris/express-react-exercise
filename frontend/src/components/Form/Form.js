import React from 'react';
import TextInput from "./TextInput";
import { withFormik } from 'formik';

const MyForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  dirty,
}) => (
  <form onSubmit={handleSubmit}>
    <TextInput
      id="first-name"
      label="First Name"
      placeholder="Margaret"
      values={values}
      touched={touched}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
    />

    <TextInput
      id="last-name"
      label="Last Name"
      placeholder="Hamilton"
      values={values}
      touched={touched}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
    />

    <p>
      The following information needs to be real for your payment to be processed.
    </p>

    <TextInput
      id="email"
      label="Email"
      placeholder="margaret@nasa.gov"
      values={values}
      touched={touched}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
    />
    
    <label htmlFor="payment" style={{ display: 'block' }}>
      Saved Payment
    </label>
    <input
      id="payment"
      type="text"
      value={values["payment"]}
      disabled
      onChange={handleChange}
      onBlur={handleBlur}
    />

    <button type="submit" disabled={isSubmitting}>
      See who paid 99¢
    </button>
  </form>
);

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ email: '' }),

  // Custom sync validation
  validate: values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email
      )
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm', // helps with React DevTools
})(MyForm);

export default MyEnhancedForm;

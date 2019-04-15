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
    <span
      className="icon--visa-card"
      style={{
        "padding-left": "34px"
      }}
    >
      <input
        id="payment"
        placeholder="**** **** **** 4242"
        type="text"
        value={values["payment"]}
        disabled
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </span>

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

  handleSubmit: async (values, { setSubmitting }) => {
    const res = await fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    setSubmitting(false);

    if (res.status === 200) {
      // TODO: Set success state
    } else {
      // Handle error
    }
  },

  displayName: 'BasicForm', // helps with React DevTools
})(MyForm);

export default MyEnhancedForm;

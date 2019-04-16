import React from 'react';
import TextInput from "./TextInput";
import { Formik } from 'formik';

const MyForm = ({
  onSubmit,
}) => (
  <Formik
    onSubmit={onSubmit}
    validate={values => {
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
    }}
    render={({
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
          id="first_name"
          label="First Name"
          placeholder="Margaret"
          values={values}
          touched={touched}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        <TextInput
          id="last_name"
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
    )}
  />
);

export default MyForm;

import React, { Fragment } from 'react';

const TextInput = ({
  id,
  label,
  placeholder,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
}) => (
  <Fragment>
    <label htmlFor={id} style={{ display: 'block' }}>
      {label}
    </label>
    <input
      id={id}
      placeholder={placeholder}
      type="text"
      value={values[id]}
      onChange={handleChange}
      onBlur={handleBlur}
      className={
        errors[id] && touched[id] ? (
          'text-input error'
        ) : (
          'text-input'
        )
      }
    />
    {errors[id] &&
    touched[id] && (
      <div className="input-feedback">{errors[id]}</div>
    )}
  </Fragment>
);

export default TextInput;

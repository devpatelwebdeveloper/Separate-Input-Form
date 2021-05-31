import React, { useState } from "react";
import styles from "./Form.module.scss";
import FormInput from "../FormInput";
// import { validate } from "./utils";
import {
  fieldValidation,
  provinceValidation,
  emailValidation,
  phonenumberValidation,
  postalvalidation
} from "./utils";

export default function CodeOfConductForm({ fields, hiddenFields }) {
  const [values, setValues] = useState({
    ...fields
  });
  //Test Validate
  const validate = {};
  Object.keys(fields).forEach((keyVal) => {
    console.log(`Validate key`, fields[keyVal].label);
    switch (keyVal) {
      case "email":
        validate.email = emailValidation;
        break;
      case "phone":
        validate.phone = phonenumberValidation;
        break;
      default:
        validate[keyVal] = (name) => {
          fieldValidation(fields[keyVal].label, name);
        };
    }
  });
  //Test Validate

  // const { email } = values;

  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  // change event handler
  const handleChange = (evt) => {
    const { name, value: newValue, type } = evt.target;

    // keep number fields as numbers
    const value = type === "number" ? +newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value
    });

    // was the field modified
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleBlur = (evt) => {
    const { name, value } = evt.target;

    // remove whatever error was there previously
    const { [name]: removedError, ...rest } = errors;

    // check for a new error
    const error = validate[name](value);

    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error })
    });
  };

  // form submit handler
  const handleSubmit = (evt) => {
    evt.preventDefault();

    // validate the form
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError })
          },
          touched: {
            ...acc.touched,
            ...newTouched
          }
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched }
      }
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && // errors object is empty
      Object.values(formValidation.touched).length ===
        Object.values(values).length && // all fields were touched
      Object.values(formValidation.touched).every((t) => t === true) // every touched field is true
    ) {
      //Submitting form Data
      console.log(values);

      document.getElementById("form").style.display = "none";
      document.getElementById("successmessage").style.display = "block";
    }
  };

  return (
    <>
      <form id="form">
        <div className={styles.FormContainer}>
          <div style={{ display: "none" }}>
            {hiddenFields &&
              Object.keys(hiddenFields).map((keyVal) => {
                return (
                  <FormInput
                    key={keyVal}
                    type="hidden"
                    value={hiddenFields[keyVal]}
                    inputLabel={keyVal}
                  />
                );
              })}
          </div>
          {Object.keys(values).map((keyVal) => {
            return (
              <FormInput
                key={keyVal}
                type={values[keyVal].type}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values[keyVal].value}
                touched={touched[keyVal]}
                error={errors[keyVal]}
                inputLabel={values[keyVal].label}
                required
              />
            );
          })}
          {/* <FormInput
            type="text"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={email}
            touched={touched.email}
            error={errors.email}
            inputLabel="Email"
            required
          /> */}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      <div id="successmessage" style={{ display: "none" }}>
        Form submitted
      </div>
    </>
  );
}

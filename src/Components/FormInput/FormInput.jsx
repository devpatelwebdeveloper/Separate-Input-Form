import React from "react";
import styles from "./FormInput.module.scss";

export default function FormInput({
  type,
  handleChange,
  handleBlur,
  value,
  touched,
  error,
  inputLabel,
  required
}) {
  var result = inputLabel
    .trim() //might need polyfill if you need to support older browsers
    .toLowerCase() //lower case everything
    .replace(
      /([^A-Z0-9]+)(.)/gi, //match multiple non-letter/numbers followed by any character
      function (match) {
        return arguments[2].toUpperCase(); //3rd index is the character we need to transform uppercase
      }
    );

  return (
    <>
      <div className={styles.form__item}>
        <input
          type={type}
          required={required}
          name={inputLabel.toLowerCase()}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor={inputLabel}>
          {inputLabel}
          {required && <span className={styles.required}>*</span>}
        </label>
        <div className={styles.required}>{touched && error}</div>
      </div>
    </>
  );
}

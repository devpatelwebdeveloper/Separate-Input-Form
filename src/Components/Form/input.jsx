import React, { useState } from "react";
import styles from "./Form.module.scss";
import { validate } from "./utils";

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

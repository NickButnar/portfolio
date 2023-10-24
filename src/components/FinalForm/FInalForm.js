import React, { useState } from "react";
import { Form, Field } from 'react-final-form';
import styles from "./final_form.module.css";
import btn from "../../stylesheets/btn.module.css";

const FinalForm = () => {
  const [dataReceived, setDataReceived] = useState(false);

  const onSubmit = async (values) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        setDataReceived(true);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const required = (value) => (value ? undefined : 'Can`t be blank');
  const mustBeNumber = (value) => (isNaN(value) ? 'Must be a number' : undefined);
  const maxLength = (count) => (value) => {
    if (typeof value === "string" && value.length > count) {
      return `should be no more than ${count} characters`;
    }
    return undefined;
  };

  const validEmail = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(value)) {
      return 'Invalid email address';
    }
    return undefined;
  };

  const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

  return (
    <div>
      {dataReceived ? (
        <h2>Data received on the server</h2>
      ) : (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2>Final Form</h2>

              <div className={styles.section}>
                <Field name="firstName" validate={required}>
                  {({ input, meta }) => (
                    <label className={styles.label}>
                      <input {...input} type="text" className={styles.input} placeholder="Name" />
                      {meta.touched && meta.error && <span className={styles.error}>{meta.error}</span>}
                    </label>
                  )}
                </Field>

                <Field name="Surname" validate={required}>
                  {({ input, meta }) => (
                    <label className={styles.label}>
                      <input {...input} className={styles.input} placeholder="Surname" />
                      { meta.touched && meta.error && <span className={styles.error}>{meta.error}</span> }
                    </label>
                  )}
                </Field>
              </div>

              <div className={styles.section}>
                <Field name="Phone" validate={composeValidators(required, mustBeNumber)}>
                  {({ input, meta }) => (
                    <label className={styles.label}>
                      <input {...input} className={styles.input}  placeholder="Phone" />
                      {meta.touched && meta.error && <span className={styles.error}>{meta.error}</span>}
                    </label>
                  )}
                </Field>

                <Field name="Email" validate={validEmail}>
                  {({ input, meta }) => (
                    <label className={styles.label}>
                      <input {...input} className={styles.input} placeholder="Email"/>
                      {meta.touched && meta.error && <span className={styles.error}>{meta.error}</span>}
                    </label>
                  )}
                </Field>
              </div>

              <Field name="How did you hear about me" validate={maxLength(110)}>
                {({ input, meta }) => (
                  <label className={styles.label}>
                    <textarea {...input} className={styles.input} type="text" placeholder="How did you hear about me?" rows="2" />
                    {meta.touched && meta.error && <span className={styles.error}>{meta.error}</span>}
                  </label>
                )}
              </Field>

              <Field name="How i can assist you?" validate={maxLength(350)}>
                {({ input, meta }) => (
                  <label className={styles.label}>
                    <textarea {...input} className={styles.input} type="text" placeholder="How i can assist you?" rows="5"/>
                    {meta.touched && meta.error && <span className={styles.error}>{meta.error}</span>}
                  </label>
                )}
              </Field>

              <button type="submit" className={btn.secondary}>Send</button>
            </form>
          )}
        />
      )}
    </div>
  );
};

export default FinalForm;

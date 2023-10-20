import React from "react";
import {useForm} from "react-hook-form";
import styles from "./form.module.css";
import btn from "../../stylesheets/btn.module.css";

const Form = () => {
  const {register, handleSubmit, formState: { errors }, formState} = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
    console.log(errors, formState);
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className="pb-5">React hook form</h2>

        <div className={styles.section}>
          <label className={styles.label}>
            <input
              className={`${styles.input} ${errors.firstName ? styles.inputError : ""}`} placeholder="Name"
              {...register("firstName", {
                required: "Cant't be blank",
                maxLength: {
                  value: 20,
                  message: "Name should be no more than 20 characters",
                },
                pattern: {
                  value: /^[A-Za-z А-Яа-я]+$/i,
                  message: "Name can only contain letters",
                },
              })}
            />
            {errors.firstName && (
              <p className={styles.error}>
                {errors.firstName.message}
              </p>
            )}
          </label>

          <label className={styles.label}>
            <input className={`${styles.input} ${errors.surname ? styles.inputError : ""}`} placeholder="Surname" {...register("surname", {required: "Cant`t be blank", maxLength: 20, pattern: {
              value: /^[A-Za-z А-Яа-я]+$/i ,
              message: "Name can only contain letters"
            },

          })} />
            {errors.surname && <p className={styles.error}>{errors.surname.message}</p>}
          </label>
        </div>

        <div className={styles.section}>
          <label className={styles.label}>
            <input
              className={`${styles.input} ${errors.phone ? styles.inputError : ""}`} placeholder="Phone"
              {...register("phone", {
                required: "Can't be blank",
                maxLength: {
                  value: 18,
                  message: "Number should be no more than 18 characters"
                },
                pattern: {
                  value: /^[0-9+]+$/,
                  message: "Only digits and '+' are allowed"
                }
              })}
            />
            {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
          </label>

          <label className={styles.label}>
            <input className={`${styles.input} ${errors.email ? styles.inputError : ""}`} placeholder="Email"
            {...register("email", {
              required: "Can`t be blank",
              pattern: {
                value:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email"
              }
            })}/>
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </label>
        </div>

        <textarea type="text" className={styles.input} placeholder="How did you hear about me?" rows="2" {...register("howDidYouFindMe")}/>

        <textarea type="text" className={styles.input} placeholder="How i can assist you?" rows="5" {...register("howICanAssistYou")}/>

        <input type="submit" value="Send" className={btn.secondary}/>
      </form>
    </div>
  )
}

export default Form;

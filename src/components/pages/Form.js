import React from "react";
import {useForm} from 'react-hook-form';

const Form = () => {
  const {register, handleSubmit, formState: { errors }, formState} = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
    console.log(errors, formState);
  }

  return (
    <div className="flex justify-center main__wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="pb-5">Let`s talk</h2>

        <div className="form__section">
          <label className="form__label">
            <input className={`form__input ${errors.firstName ? "form__input-error" : ""}`} placeholder="Name" {...register("firstName", {required: "Cant`t be blank", maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
            {errors.firstName && <p className="form__error ">{errors.firstName.message}</p>}
          </label>

          <label className="form__label">
            <input className={`form__input ${errors.surname ? "form__input-error" : ""}`} placeholder="Surname" {...register("surname", {required: "Cant`t be blank", maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
            {errors.surname && <p className="form__error">{errors.surname.message}</p>}
          </label>
        </div>

        <div className="form__section">
          <label className="form__label">
            <input className={`form__input ${errors.phone ? "form__input-error" : ""}`} placeholder="Phone" {...register("phone", {required: "Cant`t be blank", pattern: /^[0-9+]+$/})}/>
            {errors.phone && <p className="form__error">{errors.phone.message}</p>}
          </label>


          <label className="form__label">
            <input className={`form__input ${errors.email ? "form__input-error" : ""}`} placeholder="Email"
            {...register("email", {
            validate: {
              validEmail: (value) => {
              if (!value) return true;
              return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) || "Invalid email";
              },
            }})}/>
            {errors.email && <p className="form__error">{errors.email.message}</p>}
          </label>
        </div>

        <textarea type="text" className="form__input" placeholder="How did you hear about me?" rows="2" {...register("howDidYouFindMe")}/>

        <textarea type="text" className="form__input" placeholder="How i can assist you?" rows="5" {...register("howICanAssistYou")}/>

        <input type="submit" value="Send" className="bg-black btn btn-secondary"/>
      </form>
    </div>
  )
}

export default Form;

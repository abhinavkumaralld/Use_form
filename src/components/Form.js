import React from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const submitting = (data) => console.log("submitting..", data);

  return (
    <>
      <form style={{ margin: "20px" }} onSubmit={handleSubmit(submitting)}>
        <label style={{ margin: "20px" }}>Enter your name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 10,
          })}
        />
        <div style={{ color: "red" }}>
          {errors.name?.type === "required" && "Name is required"}
          {errors.name?.type === "minLength" && "letters should be atleast 3"}
          {errors.name?.type === "maxLength" && "letters should be atmost 10"}
        </div>
        <br />
        <br />
        <label style={{ margin: "20px" }}>Enter Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          // {...register({ required: "password is required" })}
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
          })}
        />

        <div style={{ color: "red" }}>
          {errors.email?.type === "pattern" && "plz enter a valid email"}
        </div>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;

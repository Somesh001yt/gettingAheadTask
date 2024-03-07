import React, { useState } from "react";
import InputField from "./InputField";
import { useFormik } from "formik";
import { signUpSchemas } from "../schemas";

const initialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Form = () => {
  //   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  //   const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);

  const { values, handleChange, handleSubmit, handleBlur , errors , touched} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchemas,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(
     errors
   )

  //   console.log(Formik)

  //   const toggleImage = () => {
  //     setIsPasswordVisible((prevState) => !prevState);
  //   };

  //   const toggleotherImage = () => {
  //     setIsPasswordVisible2((prevState) => !prevState);
  //   };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          label="First Name "
          type="text"
          name="firstname"
          value={values.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.firstname }
        />
        {/* {errors.firstname && touched.firstname ? (
            <p>{errors.firstname}</p>
        ) : null} */}
        <InputField
          label="Last Name "
          type="text"
          name="lastname"
          value={values.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.lastname }
        />
        <InputField
          label="User Name "
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.username }
        />
        <InputField
          label="Email "
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        <InputField
          label="Password "
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
        />

        <InputField
          label="Confirm Password "
          type="password"
          name="confirm_password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.confirm_password}
        />
            
        
          <button  type="submit" className="mx-auto  mt-4 capitalize text-[#fff] ml-2  w-[90%] lg:mx-0 md:w-[347px] lg:w-[408px]  h-[50px] bg-secondary text-sm  rounded-lg ">
            create Account
          </button>
        
      </form>
    </div>
  );
};

export default Form;

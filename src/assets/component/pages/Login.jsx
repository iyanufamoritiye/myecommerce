import React, { useState } from "react";
import Footer from "../../reusable/Footer";
import Header from "../../reusable/Header";
import Beatsnoop from "../../images/Beatsnoop.svg";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../others/authSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .required("Email or phone is required")
    .test("emailOrPhone", "Invalid email or phone", function (value) {
      const isEmail = value.includes("@");
      const isPhone = /^[0-9]+$/.test(value);
      if (!isEmail && !isPhone) {
        return false;
      }
      return true;
    }),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  loginUser;

  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await dispatch(loginUser(values)).unwrap();
        navigate("/");
      } catch (err) {
        setErrors({ submit: err.message });
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div>
      <Header />
      <div className=" w-screen  flex pr-24  mt-12 mb-28 sm:px-6 md:px-8">
        <div className="relative w-[805px] h-[781px] bg-[#CBE4E8] ">
          <img src={Beatsnoop} alt="" className="absolute bottom-0" />
        </div>
        <div className=" text-start flex flex-col justify-center gap-8     ">
          <div className=" ml-24 ">
            <h1 className="text-4xl mb-6 font-medium">Log in to Exclusive</h1>
            <p className="text-base font-normal">Enter your details below</p>
          </div>

          <div className="  ml-24 w-[370px] ">
            <form
              onSubmit={formik.handleSubmit}
              className="flex-col flex gap-10  "
            >
              <div className="relative">
                <input
                  type="text"
                  name="emailOrPhone"
                  value={formik.values.emailOrPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Email or phone Number"
                  required
                  className="border-b-2 border-b-gray-300 py-2 w-full  focus:outline-none"
                />
                {formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
                  <p className=" absolute -bottom-8   text-xs text-red-500">
                    {formik.errors.emailOrPhone}
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Password"
                  required
                  suggested="current password"
                  className="border-b-2 border-b-gray-300 w-full py-2 focus:outline-none "
                />
                {formik.touched.password && formik.errors.password && (
                  <p className=" absolute -bottom-8    text-xs text-red-500">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center">
                <button
                  className="bg-red-500 px-4 py-3 rounded-sm w-36 text-base text-white font-medium "
                  type="submit"
                >
                  {loading ? "Loging in..." : "login"}
                </button>

                <button className="text-sm text-red-600 mt-6">
                  Forgot Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

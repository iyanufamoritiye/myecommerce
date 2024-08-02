import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import Header from "../../reusable/Header";
import Footer from "../../reusable/Footer";
import Beatsnoop from "../../images/Beatsnoop.svg";
import { signUpUser, verifyOtp } from "../others/authSlice";

export const signupSchema = Yup.object().shape({
  fullname: Yup.string().required("Name is required"),
  emailOrPhone: Yup.string()
    .required("Email or phone is required")
    .test("emailOrPhone", "Invalid email or phone", (value) => {
      if (!value) return false; // Ensure value is not undefined or null

      const isEmail = value.includes("@");
      const isPhone = /^[0-9]+$/.test(value);

      return isEmail || isPhone;
    }),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, otpSent, confirmationResult } = useSelector(
    (state) => state.auth
  );

  const [isPhoneSignup, setIsPhoneSignup] = useState(false);
  const [otp, setOtp] = useState("");

  const formik = useFormik({
    initialValues: {
      fullname: "",
      emailOrPhone: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        if (isPhoneSignup) {
          // Start phone number sign-up
          await dispatch(
            signUpUser({
              ...values,
              recaptchaContainerId: "recaptcha-container",
            })
          ).unwrap();
        } else {
          // Email sign-up
          await dispatch(signUpUser(values)).unwrap();
        }
        navigate("/login");
      } catch (err) {
        setErrors({ submit: err.message });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleOtpVerification = async () => {
    try {
      await dispatch(
        verifyOtp({
          otp,
          confirmationResult,
          fullname: formik.values.fullname,
          emailOrPhone: formik.values.emailOrPhone,
        })
      ).unwrap();
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-screen flex pr-24 mt-12 mb-28">
        <div className="relative w-[805px] h-[781px] bg-[#CBE4E8]">
          <img src={Beatsnoop} alt="" className="absolute bottom-0" />
        </div>
        <div className="text-start flex flex-col justify-center gap-8">
          <div className="ml-24">
            <h1 className="text-4xl mb-6 font-medium">Create an account</h1>
            <p className="text-base font-normal">Enter your details below</p>
          </div>

          <div className="ml-24 w-[370px]">
            <form
              onSubmit={formik.handleSubmit}
              className="flex-col w-full flex gap-10"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  name="fullname"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Name"
                  required
                  className="border-b-2 border-b-gray-300 py-2 w-full focus:outline-none"
                />
                {formik.touched.fullname && formik.errors.fullname && (
                  <p className="absolute -bottom-6 text-xs text-red-500">
                    {formik.errors.fullname}
                  </p>
                )}
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="emailOrPhone"
                  value={formik.values.emailOrPhone}
                  onChange={(e) => {
                    formik.handleChange(e);
                    const value = e.target.value;
                    const isPhone = /^[0-9]+$/.test(value);
                    setIsPhoneSignup(!value.includes("@") && isPhone);
                  }}
                  onBlur={formik.handleBlur}
                  placeholder="Email or phone number"
                  required
                  className="border-b-2 border-b-gray-300 py-2 w-full focus:outline-none"
                />

                {formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
                  <p className=" absolute -bottom-6    text-xs text-red-500">
                    {formik.errors.emailOrPhone}
                  </p>
                )}
              </div>

              {!isPhoneSignup && (
                <div className="relative w-full">
                  <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Password"
                    required
                    className="border-b-2 border-b-gray-300 w-full py-2 focus:outline-none"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="absolute -bottom-6 text-xs text-red-500">
                      {formik.errors.password}
                    </p>
                  )}
                </div>
              )}

              <button
                className="bg-red-500 hover:bg-red-600 py-3 px-8 w-full text-base text-white font-medium"
                type="submit"
                disabled={formik.isSubmitting || loading}
              >
                {loading ? "Signing up..." : "Create Account"}
              </button>

              {formik.errors.submit && <p>{formik.errors.submit}</p>}
              <div id="recaptcha-container" className="hidden"></div>
            </form>
            {otpSent && (
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="border-b-2 border-b-gray-300 py-2 w-full focus:outline-none"
                />
                <button
                  className="bg-red-500 hover:bg-red-600 py-3 px-8 w-full text-base text-white font-medium"
                  onClick={handleOtpVerification}
                  disabled={loading}
                >
                  {loading ? "Verifying OTP..." : "Verify OTP"}
                </button>
              </div>
            )}

            <div className="relative mt-6">
              <button className="bg-white py-3 px-8 w-full text-base text-gray-950 border-2 font-medium">
                Sign up with Google
              </button>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-4 left-20"
              >
                <g clipPath="url(#clip0_2248_3336)">
                  <path
                    d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2248_3336">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="text-center mt-8">
              <p className="text-base font-normal text-gray-600">
                Already have an account?{" "}
                <Link
                  className="border-b-2 text-base font-normal border-gray-300 hover:border-gray-300 ml-4 pb-1"
                  to="/login"
                >
                  Log In
                </Link>
              </p>
            </div>
            {formik.errors.submit && (
              <p className="text-red-500 text-center">{formik.errors.submit}</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

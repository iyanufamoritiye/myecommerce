import React from "react";
import Header from "../../reusable/Header";
import Footer from "../../reusable/Footer";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../others/authSlice";

const accountSchema = Yup.object().shape({
  firstname: Yup.string(),
  lastname: Yup.string(),
  email: Yup.string().email("Invalid email"),
  address: Yup.string(),
  currentpassword: Yup.string().min(
    6,
    "Password must be at least 6 characters"
  ),
  newpassword: Yup.string().min(6, "Password must be at least 6 characters"),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("newpassword"), null],
    "Passwords must match"
  ),
});

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      firstname: user?.firstname || "",
      lastname: user?.lastname || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
      currentpassword: "",
      newpassword: "",
      confirmpassword: "",
    },
    validationSchema: accountSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await dispatch(updateUserProfile(values)).unwrap();
        navigate("/");
      } catch (err) {
        setErrors({ submit: err.message });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <div>
      <Header wishlist={true} cart={true} account={true} />
      <div className=" w-screen  text-start  mt-12 px-24 xs:px-4  mb-28 sm:px-6 md:px-8">
        <div className="flex justify-between">
          <div>
            <p className="mb-4 ">
              <span className="text-sm text-gray-500 font-normal mr-2">
                Home
              </span>
              <span className="text-sm text-gray-500 font-normal  mr-2">/</span>
              <span className="text-sm font-normal ">Cart</span>
            </p>
          </div>
          <h2 className="text-sm font-normal text-gray-900 mb-6">
            Welcome:{" "}
            <span className="text-red-600 text-sm font-normal ">Md Rimel</span>
          </h2>
        </div>
        <div className="flex xs:flex-col gap-12">
          <div className="w-1/3 xs:w-5/6">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-6">Manage My Account</h3>
              <div className="pl-4 flex flex-col gap-4">
                <p className="text-base text-red-600 ">My Profile</p>
                <p className="text-base text-gray-500 ">Address Book</p>
                <p className="text-base text-gray-500 ">My Payment Options</p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-6">My Orders</h3>
              <div className="pl-4  flex flex-col gap-4">
                <p className="text-base text-gray-500 ">My Returns</p>
                <p className="text-base text-gray-500 ">My Cancellations</p>
              </div>
            </div>
            <h3 className="text-lg font-medium">My WishList</h3>
          </div>
          <div className="p-12 shadow-lg xs:p-6  w-full">
            <h2 className="text-2xl font-medium  text-red-600 mb-6 ">
              Edit Your Profile
            </h2>
            <div>
              <form action="" onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-2 gap-x-12 xs:gap-x-6 gap-y-4 ">
                  <div className="w-full text-start flex flex-col gap-4 ">
                    <label
                      htmlFor="firstname"
                      className="text-base text-gray-600 font-normal"
                    >
                      First Name
                    </label>
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstname}
                      placeholder="Md"
                      className="w-full bg-gray-100 p-6 font-medium text-sm
                    border active:border-gray-200 rounded-md text-gray-950 h-10"
                    />
                    {formik.touched.firstname && formik.errors.firstname ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.firstname}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full text-start flex flex-col gap-4 ">
                    <label
                      htmlFor="lastname"
                      className="text-base text-gray-600 font-normal"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastname}
                      placeholder="Rimel"
                      className="w-full bg-gray-100 p-6 font-medium text-sm
                    border active:border-gray-200 rounded-md text-gray-950 h-10"
                    />
                    {formik.touched.lastname && formik.errors.lastname ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.lastname}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full text-start flex flex-col gap-4">
                    <label
                      htmlFor=""
                      className="text-base text-gray-600 font-normal"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="rimel1111@gmail.com"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className="w-full bg-gray-100 p-6 font-medium text-sm
                    border active:border-gray-200 rounded-md text-gray-950 h-10"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full text-start flex flex-col gap-4">
                    <label
                      htmlFor=""
                      className="text-base text-gray-600 font-normal"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Kingston, 5236, United State"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address}
                      className=" w-full bg-gray-100 p-6 font-medium text-sm
                   border active:border-gray-200 rounded-md text-gray-950 h-10  "
                    />
                    {formik.touched.address && formik.errors.address ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.address}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="w-full text-start flex flex-col gap-4 mt-8 ">
                  <label
                    htmlFor=""
                    className="text-base text-gray-600 font-normal"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentpassword"
                    id="currentpassword"
                    placeholder="Current Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.currentpassword}
                    className="w-full bg-gray-100 p-6 font-medium text-sm
                    border active:border-gray-200 rounded-md text-gray-950 h-10"
                  />
                  {formik.touched.currentpassword &&
                  formik.errors.currentpassword ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.currentpassword}
                    </div>
                  ) : null}
                </div>
                <div className="mt-8">
                  <input
                    type="password"
                    name="newpassword"
                    id="newpassword"
                    placeholder="New Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newpassword}
                    className="w-full bg-gray-100 p-6 font-medium text-sm
                    border active:border-gray-200 rounded-md text-gray-950 h-10"
                  />
                  {formik.touched.newpassword && formik.errors.newpassword ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.newpassword}
                    </div>
                  ) : null}
                </div>
                <div className="mt-8">
                  <input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="Confirm New Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmpassword}
                    className="w-full bg-gray-100 p-6 font-medium text-sm
                    border active:border-gray-200 rounded-md text-gray-950 h-10"
                  />
                  {formik.touched.confirmpassword &&
                  formik.errors.confirmpassword ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.confirmpassword}
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
            <div className=" mt-12 flex justify-end">
              <button className="mr-4 text-base font-normal">cancel</button>
              <div>
                <button
                  type="submit"
                  onClick={formik.handleSubmit}
                  disabled={isSubmitting}
                  className="  bg-red-500 border-red-500 border  
               text-base font-medium text-white px-12 py-3 rounded-sm"
                >
                  {loading ? "Processing..." : "Save Changes"}
                </button>
                {errors.submit && (
                  <div className="text-red-500 text-sm mt-2">
                    {errors.submit}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;

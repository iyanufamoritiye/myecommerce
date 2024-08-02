import React from "react";
import Footer from "../../reusable/Footer";
import Header from "../../reusable/Header";

import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <Header wishlist={true} cart={true} account={true} />
      <div className="w-screen px-24 mt-12 mb-24 xs:px-4  sm:px-6 md:px-8">
        <div className="m">
          <p className="mb-4 text-start">
            <span className="text-sm text-gray-500 font-normal mr-2">Home</span>
            <span className="text-sm text-gray-500 font-normal  mr-2">/</span>
            <span className="text-sm font-normal ">Cart</span>
          </p>
        </div>
        <div className="flex    w-full justify-between mt-24 ">
          <div className="flex flex-col justify-between  gap-6 w-80 p-8   shadow-md shadow-gray-200 rounded-lg">
            <div className="text-start border-b-2  border-b-gray-400">
              <div className="flex gap-4 items-center  mb-6">
                <div className="bg-red-500 h-10 w-10 rounded-full  flex justify-center items-center">
                  <FiPhone className="text-white rounded-full w-6 h-6   " />
                </div>
                <h3 className="text-base font-medium">Call To Us</h3>
              </div>
              <div className="flex flex-col mb-4 gap-4">
                <p className="text-sm font-normal text-gray-950">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-sm font-normal ">
                  <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
                </p>
              </div>
            </div>

            <div className="text-start  ">
              <div className="flex gap-4 items-center  mb-6">
                <div className="bg-red-500 h-10 w-10 rounded-full  flex justify-center items-center">
                  <GoMail className="text-white rounded-full w-6 h-6   " />
                </div>
                <h3 className="text-base font-medium">Write To Us</h3>
              </div>
              <div className="flex flex-col  gap-4">
                <p className="text-sm text-gray-600">
                  Fill out our form and we will contact <br /> you within 24
                  hours.
                </p>
                <p className="text-sm font-normal  ">
                  <a href="mailto:customer@exclusive.com ">
                    customer@exclusive.com
                  </a>
                </p>
                <p className="text-sm font-normal  ">
                  <a href="mailto:Support@exclusive.com  ">
                    Support@exclusive.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="  bg-white p-5 rounded-lg    shadow-gray-200 shadow-md">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex   md:flex-row gap-4 mb-4">
                <div className=" ">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name  "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="w-full bg-gray-100 p-6 font-medium text-sm  border active:border-gray-200 rounded-md text-gray-950 h-10"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.name}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email  "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full bg-gray-100 p-6  active:border-gray-200 font-medium text-sm  border rounded-md text-gray-950 h-10"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone  "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className="w-full bg-gray-100 p-6 active:border-gray-200 font-medium text-sm  border rounded-md text-gray-950 h-10"
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className=" bg-gray-100 p-6 font-medium text-sm focus:border-2 focus:border-gray-200  rounded-md w-[737px] h-[270px]    "
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>
              <div className="text-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-500 text-white  font-semibold rounded-md hover:bg-red-600"
                >
                  Send Message
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

export default Contact;

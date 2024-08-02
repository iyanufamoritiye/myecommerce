import React, { useEffect, useState } from "react";
import Header from "../../reusable/Header";
import Footer from "../../reusable/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCartItems } from "../others/itemSlice";
import Bkash from "../../images/Bkash.svg";
import Visa from "../../images/Visa.svg";
import Mastercard from "../../images/Mastercard.svg";
import Nagad from "../../images/Nagad.svg";

const checkoutSchema = Yup.object().shape({
  fullname: Yup.string().required("Full name is required"),
  companyname: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  street: Yup.string().required("Street is required"),
  apartment: Yup.string(),
  city: Yup.string().required("City/Town is required"),
  paymentMethod: Yup.string().required("Payment method is required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.item);
  const { items, loading, error } = cart;
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const { total } = useSelector((state) => state.item.cart);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      companyname: "",
      fullname: "",
      email: "",
      phone: "",
      street: "",
      apartment: "",
      city: "",
      paymentMethod: "",
      saveInfo: false,
    },
    validationSchema: checkoutSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await dispatch(signUpUser(values)).unwrap();
        navigate("/");
      } catch (err) {
        setErrors({ submit: err.message });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handlePlaceOrder = () => {
    navigate("/");
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;
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
    <div className="  ">
      <Header wishlist={true} cart={true} account={true} />

      <div className="w-screen px-24 z-10 mt-12 mb-28  ">
        <div className=" mb-12">
          <p className="mb-4 text-start">
            <span className="text-sm text-gray-500 font-normal mr-2">Home</span>
            <span className="text-sm text-gray-500 font-normal  mr-2">/</span>
            <span className="text-sm text-gray-500 font-normal mr-2">
              My Account
            </span>
            <span className="text-sm text-gray-500 font-normal  mr-2">/</span>
            <span className="text-sm text-gray-500 font-normal mr-2">
              Product
            </span>
            <span className="text-sm text-gray-500 font-normal  mr-2">/</span>
            <span className="text-sm text-gray-500 font-normal mr-2">
              View Cart
            </span>
            <span className="text-sm text-gray-500 font-normal  mr-2">/</span>

            <span className="text-sm font-normal ">Cart</span>
          </p>
        </div>
        <h1 className="text-3xl text-start font-bold mb-9 ">Billing Details</h1>
        <div className="flex justify-between">
          <div className="  items-start">
            <form
              onSubmit={formik.handleSubmit}
              className=" w-[470px] h-[814px] flex flex-col justify-between   "
            >
              <div className="w-full text-start flex flex-col gap-4 ">
                <label
                  htmlFor="fullname"
                  className="text-base text-gray-600 font-normal"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullname}
                  className="w-full bg-gray-100 p-6 font-medium text-sm
                    border active:border-gray-200 rounded-md text-gray-950 h-10"
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.fullname}
                  </div>
                ) : null}
              </div>
              <div className="w-full text-start flex flex-col gap-4">
                <label
                  htmlFor="companyname"
                  className="text-base text-gray-600 font-normal"
                >
                  Company Name
                </label>
                <input
                  id="companyname"
                  name="companyname"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.companyname}
                  className="w-full bg-gray-100 p-6 font-medium text-sm
                    border active:border-gray-200  rounded-md text-gray-950 h-10"
                />
                {formik.touched.companyname && formik.errors.companyname && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.companyname}
                  </div>
                )}
              </div>
              <div className="w-full text-start flex flex-col gap-4 ">
                <label
                  htmlFor="street"
                  className="text-base text-gray-600 font-normal"
                >
                  Street Address <span className="text-red-600 ">*</span>
                </label>
                <input
                  id="street"
                  name="street"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.street}
                  className="w-full bg-gray-100 p-6 font-medium text-sm
                    border active:border-gray-200 rounded-md text-gray-950 h-10"
                />
                {formik.touched.street && formik.errors.street && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.street}
                  </div>
                )}
              </div>
              <div className="w-full text-start flex flex-col gap-4 ">
                <label
                  htmlFor="apartment"
                  className="text-base text-gray-600 font-normal"
                >
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  id="apartment"
                  name="apartment"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.apartment}
                  className="w-full bg-gray-100 p-6 font-medium text-sm
                    border active:border-gray-200 rounded-md text-gray-950 h-10"
                />
                {formik.touched.apartment && formik.errors.apartment ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.apartment}
                  </div>
                ) : null}
              </div>
              <div className="w-full text-start flex flex-col gap-4 ">
                <label
                  htmlFor="city"
                  className="text-base text-gray-600 font-normal"
                >
                  Town / City <span className="text-red-600 text-sm">*</span>
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  className="w-full bg-gray-100 p-6 font-medium text-sm
                   
                    border active:border-gray-200 rounded-md text-gray-950 h-10"
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.city}
                  </div>
                ) : null}
              </div>
              <div className="w-full text-start flex flex-col gap-4 ">
                <label
                  htmlFor="phone"
                  className="text-base text-gray-600 font-normal"
                >
                  Phone Number <span className="text-red-600 text-sm">*</span>{" "}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="w-full bg-gray-100 p-6 font-medium text-sm
                    border active:border-gray-200 rounded-md text-gray-950 h-10"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>
              <div className="w-full text-start flex flex-col gap-4 ">
                <label
                  htmlFor="email"
                  className="text-base text-gray-600 font-normal"
                >
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
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
              <div className="mb-6   flex gap-4">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formik.values.saveInfo}
                  onChange={formik.handleChange}
                  className="active:accent-red-400 hoveractive:accent-red-600    accent-red-600  "
                />
                <span>Save this information for faster checkout next time</span>
              </div>
            </form>
          </div>
          <div className="w-[527px] h-[136px] pt-12">
            {items.map((product) => (
              <div key={product.id} className="  w-4/5 mb-4 flex ">
                <div className="flex w-full  items-center   gap-4">
                  <img
                    src={product.imageSrc}
                    alt="product"
                    className="h-10 w-10"
                  />

                  <span className="ext-base font-normal">{product.name}</span>
                </div>

                <div className="mr-full flex items-center">{product.price}</div>
              </div>
            ))}
            <div className="w-4/5">
              <div className="flex justify-between pb-3 mt-3 border-b-2 border-b-gray-300">
                <span className="text-base font-medium">Subtotal:</span>
                <span className="text-base font-medium">${total}</span>
              </div>
              <div className="flex justify-between  pb-3 mt-3   border-b-2 border-b-gray-300">
                <span className="text-base font-medium">Shipping:</span>
                <span className="text-base font-medium">free</span>
              </div>
              <div className="flex justify-between pb-3 mt-3 ">
                <span className="text-base font-medium">Total:</span>
                <span className="text-base font-medium">${total}</span>
              </div>
              <div className="flex justify-between  mt-2 items-center ">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bankAccount"
                    checked={formik.values.paymentMethod === "bankAccount"}
                    onChange={formik.handleChange}
                    className="w-5 h-5 mr-2 items-center accent-black"
                  />
                  <label
                    htmlFor="bankAccount"
                    className="text-base font-medium"
                  >
                    bank
                  </label>
                </div>
                <div className="flex  shadow-sm shadow-gray-100   ">
                  <img src={Bkash} alt="Bkash" className="h-7 w-10 p-1" />
                  <img src={Visa} alt="Visa" className=" h-7 w-10 p-1 " />
                  <img
                    src={Mastercard}
                    alt="Mastercard"
                    className="h-7 w-10   p-1"
                  />
                  <img src={Nagad} alt="Nagad" className="  h-7 w-10 p-1" />
                </div>
              </div>
              <div className="text-start">
                <input type="radio" c />
              </div>
            </div>
            <div className="flex justify-between  items-center  mt-6   mb-4">
              <input
                type="text"
                name="coupon"
                className="  px-6 py-3 border-gray-300 border rounded-sm"
                placeholder="Coupon code"
              />
              <button
                className="bg-red-500 border-red-500 border
                 text-base font-medium text-white px-12 py-2 rounded-sm"
              >
                Apply Coupon
              </button>
            </div>
            <div className="text-start mt-20">
              <button
                type="submit"
                onClick={formik.handleSubmit}
                disabled={isSubmitting}
                className="  bg-red-500 border-red-500 border  
                 text-base font-medium text-white px-12 py-3 rounded-sm"
              >
                {loading ? "Processing..." : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

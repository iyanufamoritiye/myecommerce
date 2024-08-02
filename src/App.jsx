import { useState } from "react";

import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./assets/component/pages/Homepage";
import Login from "./assets/component/pages/Login";
import Signup from "./assets/component/pages/Signup";

import Wishlist from "./assets/component/pages/Wishlist";
import Contact from "./assets/component/pages/Contact";
import About from "./assets/component/pages/About";
import Account from "./assets/component/pages/Account";
import Cart from "./assets/component/pages/Cart";
import "@fontsource/inter/400.css";

import { Provider } from "react-redux";
import { store } from "./assets/component/others/store";

import PageNotFound from "./assets/component/pages/PageNotFound";
import Checkout from "./assets/component/pages/Checkout";
import ProductDetails from "./assets/component/pages/ProductDetails";
import { AuthProvider } from "./assets/component/others/AuthContext";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<Account />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="productdetails" element={<ProductDetails />} />
            </Routes>
          </Router>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;

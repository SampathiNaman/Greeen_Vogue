import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPloicy from "./pages/RefundPloicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndContions from "./pages/TermAndContions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SellProduct from "./pages/SellProduct";

function App() {
  const [loggedIn, setLoggedIn] = useState(Cookies.get("refreshToken") !== undefined);

  const [womensWear, setWomensWear] = useState([]);
  const [mensWear, setMensWear] = useState([]);
  const [footWear, setFootWear] = useState([]);

  const fetchProducts = async () => {
    await fetch('http://localhost:5000/api/product')
      .then((res) => res.json())
      .then((data) => {
        let women = [];
        let men = [];
        let foot = [];
        data.forEach((product) => {
          switch (product.category) {
            case "Women's Wear":
              women.push(product);
              break;
            case "Men's Wear":
                men.push(product);
                break;
            case "Foot Wear":
                  foot.push(product);
                  break;
            default:
              break;
          }
        })
        setWomensWear(women);
        setMensWear(men);
        setFootWear(foot);
      })
      .catch((err) => console.log(err));
  };

  const fetchCart = async () => {
    await fetch("http://localhost:5000/api/user/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get("refreshToken")}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let quantityArray = [];
        let productArray = [];
        data.products.forEach((item) => {
          quantityArray.push(item.count);
          productArray.push(item.product);
        });
        setQuantity(quantityArray);
        setCart(productArray);
      })
      .catch((err) => console.log(err));
  }

  const fetchWishlist = async () => {
    await fetch("http://localhost:5000/api/user/wishlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get("refreshToken")}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setWishlist(data.wishlist);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchProducts();
    if (loggedIn) {
      fetchCart();
      fetchWishlist();
    }
  }, []);

 
  const [role, setRole] = useState(Cookies.get('role')? Cookies.get('role') : "user");

  const [selectedProduct, setSelectedProduct] = useState({});
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const totalCost = cart ? cart
    .map((item, i) => item.price * quantity[i])
    .reduce((a, b) => a + b, 0) : 0;

  const [wishlist, setWishlist] = useState([]);
  const [compare, setCompare] = useState(
    localStorage.getItem("compare")
      ? JSON.parse(localStorage.getItem("compare"))
      : []
  );

  const handleAddCart = (product) => {
    setCart([...cart, product]);
    setQuantity([...quantity, 1]);
  };

  const handleAddWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const handleAddCompare = (product) => {
    setCompare([...compare, product]);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                cartItemsCount={quantity.reduce((a, b) => a + b, 0)}
                totalCost={totalCost}
              />
            }
          >
            <Route
              index
              element={
                <Home
                  womensWear={womensWear}
                  mensWear={mensWear}
                  footWear={footWear}
                  setSelectedProduct={setSelectedProduct}
                />
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="product" element={<OurStore />} /> */}
            <Route path="sell-product" element={<SellProduct />} />
            {selectedProduct && (
              <Route
                path="product/:id"
                element={
                  <SingleProduct
                    product={selectedProduct}
                    handleAddCart={handleAddCart}
                    handleAddWishlist={handleAddWishlist}
                    handleAddCompare={handleAddCompare}
                  />
                }
              />
            )}
            {/* <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} /> */}
            <Route
              path="cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  totalCost={totalCost}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="checkout"
              element={<Checkout totalCost={totalCost} />}
            />
            <Route
              path="compare-product"
              element={
                <CompareProduct compare={compare} setCompare={setCompare} />
              }
            />
            <Route
              path="wishlist"
              element={
                <Wishlist wishlist={wishlist} setWishlist={setWishlist} loggedIn={loggedIn} />
              }
            />
            <Route path="login" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPloicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndContions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

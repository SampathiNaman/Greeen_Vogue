import React, {useState, useEffect} from "react";
import axios from "axios";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Cookies from "js-cookie";

const Cart = (props) => {
  const {cart, setCart, quantity, setQuantity, totalCost, loggedIn} = props

  const saveCart = async () => {
    await fetch("http://localhost:5000/api/user/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get("refreshToken")}`
      },
      body: JSON.stringify({cart: cart, count: [...quantity], cartTotal: totalCost}),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    return () => loggedIn && saveCart()
  }, [])


  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
      
            <div className="col-12">
            {cart.length === 0 ? <h1 className="text-center">Cart is Empty</h1> : <>
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            </>}   
             
            {cart.map((item, i) =>{
                const {images, title, price, category} = item;
                const img1 = images[0];
            return (
            <div key={i} className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={img1} className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <p>{title}</p>
                  <p>Category: {category}</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">₨ {price}</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    value={quantity[i]}
                    onChange={(e) => {setQuantity(quantity.slice(0, i).concat(parseInt(e.target.value)).concat(quantity.slice(i+1))); console.log(quantity);}}
                    min={1}
                    max={10}
                    id=""
                  />
                </div>
                <div>
                  <AiFillDelete onClick={() => {setCart(cart.slice(0, i).concat(cart.slice(i+1))); setQuantity(quantity.slice(0, i).concat(quantity.slice(i+1)));}} className="text-danger " />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">₨ {price*quantity[i]}</h5>
              </div>
            </div>
            )}
            )}

          </div>

          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: ₨ {totalCost}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;

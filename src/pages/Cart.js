import React, {useState, useEffect} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = (props) => {
  const {cart, setCart, quantity, setQuantity, totalCost} = props

  useEffect(() => {
    localStorage.setItem("quantity", JSON.stringify(quantity))
  }, [quantity])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  })


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
                const {id, img1, img2, title, description, rating, cost, type, category} = item;
            return (
            <div key={i} className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={img1} className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <p>{title}</p>
                  <p>Type: {type}</p>
                  <p>Category: {category}</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">₨ {cost}</h5>
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
                <h5 className="price">₨ {cost*quantity[i]}</h5>
              </div>
            </div>
            )}
            )}

          </div>

          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
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

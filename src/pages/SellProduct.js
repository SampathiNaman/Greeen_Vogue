import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import CustomInput from "../components/CustomInput";
import Container from "../components/Container";
import Cookies from "js-cookie";

const SellProduct = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (title === '' || description === '' || category === '' || brand === '' || quantity === '' || price === '') {
            setError('All fields are required')
            return
        }
        setError('')
        await fetch('http://localhost:5000/api/product', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get('refreshToken')}`
            },
            body: JSON.stringify({
                title,
                description,
                category,
                brand,
                images: [img1, img2],
                quantity,
                price,
                color: [],
                sold: 0,
                totalrating: Math.floor(Math.random() * 3) + 3,
            })
        }).then(res => res.json())
        .then(data => {
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <>
      <Meta title={"Sell Product"} />
      <BreadCrumb title="Sell Product" />
      <Container class1="sell-product-wrapper home-wrapper-2 py-5">
        <div className="row">
        <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Enter Product Details</h3>
              <form action="" onSubmit={submitHandler} className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Product Title"
                  onChange={setTitle}
                />
                <textarea name="description" rows={5} value={description} className="form-control" placeholder="Product Description" onChange={(e) => setDescription(e.target.value)} />
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control">
                    <option value="">Select Category</option>
                    <option value="Women's Wear">Women's Wear</option>
                    <option value="Men's Wear">Men's Wear</option>
                    <option value="Foot Wear">Foot Wear</option>
                </select>
                <CustomInput
                  type="text"
                  name="brand"
                  value={brand}
                  placeholder="Product Brand"
                  onChange={setBrand}
                />
                <div className="d-flex justify-content-between">                
                <CustomInput
                  type="url"
                  name="img1"
                  value={img1}
                  placeholder="Product Image URL"
                  onChange={setImg1}
                />
                <CustomInput
                  type="url"
                  name="img2"
                  value={img2}
                  placeholder="Product Image URL"
                  onChange={setImg2}
                /></div>

                  <input
                    className="form-control"
                    type="number"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => {setQuantity(e.target.value)}}
                    min={1}
                    max={10}
                    placeholder="Product Quantity"
                  />
                <input
                  type="number"
                  name="price"
                  value={price}
                  min={0}
                  placeholder="Product Price"
                  onChange={(e)=>setPrice(e.target.value)}
                  className="form-control"
                  />
                <div>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button
                      className="button border-0"
                      type="submit"
                    >
                      Submit Product Details
                    </button>
                  </div>
                  {error && <p className="text-danger text-center mt-3">Enter Valid Detaills</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SellProduct;

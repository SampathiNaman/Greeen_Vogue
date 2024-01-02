import React, {useEffect} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import ReactStars from "react-rating-stars-component";

const CompareProduct = (props) => {
  const {compare, setCompare} = props;

  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compare))
  })
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
      {compare.length==0 && <h1 className="text-center">Add Products to Compare</h1>}        
        <div className="row">
          {compare.map((product) => {
            const {_id, images, title, totalrating, price, category} = product
            const img1 = images[0]
            return (
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                onClick={() => setCompare(compare.filter((item) => item._id !== _id))}
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={img1} alt="dress" className="w-100" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                {title}
                </h5>
                <ReactStars
              count={5}
              size={24}
              value={parseInt(totalrating)}
              edit={false}
              activeColor="#ffd700"
            />
                <h6 className="price mb-3 mt-3">₨ {price}</h6>

                <div>

                  <div className="product-detail">
                    <h5>Category:</h5>
                    <p>{category}</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>

                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>              
            )
          })}
          
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;

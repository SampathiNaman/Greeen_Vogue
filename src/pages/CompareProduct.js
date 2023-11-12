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
            const {id, img1, img2, title, description, rating, cost, type, category} = product
            return (
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                onClick={() => setCompare(compare.filter((item) => item.id !== id))}
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
              value={rating}
              edit={false}
              activeColor="#ffd700"
            />
                <h6 className="price mb-3 mt-3">₨ {cost}</h6>

                <div>
                  {/* <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div> */}
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>{type}</p>
                  </div>
                  <div className="product-detail">
                    <h5>Category:</h5>
                    <p>{category}</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  {/* <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div> */}
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


          {/* <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/dress/j/9/a/xs-194-brown-aahwan-original-imagqh96rshyzmvg.jpeg?q=70" alt="dress" className="w-100" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                Women A-line Brown Dress
                </h5>
                <h6 className="price mb-3 mt-3">₨ 450</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Women's wear</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
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
          </div> */}
          
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;

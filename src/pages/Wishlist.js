import React, {useEffect} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import ReactStars from "react-rating-stars-component";

const Wishlist = (props) => {
  const {wishlist, setWishlist} = props

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist])
  
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
      {wishlist.length==0 && <h1 className="text-center">Add Your Favourite Products</h1>}
        <div className="row">
          {wishlist.map((product) => {
            const {id, img1, img2, title, description, rating, cost, type, category} = product
            return (
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                onClick={() => setWishlist(wishlist.filter((item) => item.id !== id))}
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src={img1}
                  className="img-fluid w-100"
                  alt="dress"
                />
              </div>
              <div className="py-3 px-3">
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
                <h6 className="price">₨ {cost}</h6>
              </div>
            </div>
          </div>            
          )})}

          {/* <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="https://getketchadmin.getketch.com/product/8905040896045/660/HLJK000476_1.JPG"
                  className="img-fluid w-100"
                  alt="dress"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                Highlander Men Bomber Jacket
                </h5>
                <h6 className="price">₨ 700</h6>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;

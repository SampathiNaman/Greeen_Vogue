import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
<<<<<<< Updated upstream
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
=======
          {wishlist.map((product) => {
            const {_id, images, title,  totalrating, price} = product
            const img1 = images[0]
            return (
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                onClick={() => setWishlist(wishlist.filter((item) => item._id !== _id))}
>>>>>>> Stashed changes
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
<<<<<<< Updated upstream
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
=======
                  src={img1}
                  className="img-fluid w-100"
                  alt="dress"
>>>>>>> Stashed changes
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
<<<<<<< Updated upstream
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
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
          </div>
=======
                {title}
                </h5>
                <ReactStars
              count={5}
              size={24}
              value={parseInt(totalrating)}
              edit={false}
              activeColor="#ffd700"
            />
                <h6 className="price">₨ {price}</h6>
              </div>
            </div>
          </div>            
          )})}

>>>>>>> Stashed changes
        </div>
      </Container>
    </>
  );
};

export default Wishlist;

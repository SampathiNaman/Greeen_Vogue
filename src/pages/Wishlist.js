import React, {useEffect} from "react";
import Cookies from "js-cookie";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import ReactStars from "react-rating-stars-component";

const Wishlist = (props) => {
  const {wishlist, setWishlist, loggedIn} = props

  const saveWishlist = async () => {
    await fetch("http://localhost:5000/api/user/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get("refreshToken")}`
      },
      body: JSON.stringify({wishlist: wishlist}),
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    return () => loggedIn && saveWishlist()
  }, [])
  
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
      {wishlist.length==0 && <h1 className="text-center">Add Your Favourite Products</h1>}
        <div className="row">
          {wishlist.map((product) => {
            const {_id, images, title,  totalrating, price} = product
            const img1 = images[0]
            return (
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                onClick={() => setWishlist(wishlist.filter((item) => item._id !== _id))}
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
              value={parseInt(totalrating)}
              edit={false}
              activeColor="#ffd700"
            />
                <h6 className="price">₨ {price}</h6>
              </div>
            </div>
          </div>            
          )})}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;

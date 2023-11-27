import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
// import wishlist from "../images/wishlist.svg";
// import watch from "../images/watch.jpg";
// import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCard = (props) => {
  const { grid, product, handleProductClick } = props;
  console.log(grid);
  let location = useLocation();
  if (product === undefined) return (<></>)

  const {_id, images, title, description, totalrating, price} = product
  const img1 = images[0]
  const img2 = images[1]
  return (
    <>
      <div
      onClick={() => handleProductClick(product)}
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          // to={`${
          //   location.pathname == "/"
          //     ? `/product/${_id}`
          //     : location.pathname == "/product/:id"
          //     ? `/product/:id`
          //     : `id`
          // }`}
          to={`/product/${_id}`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={img1} className="img-fluid" alt="product image" />
            <img src={img2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details mt-3">
            <h6 className="brand">{title}</h6>
            <h5 className="product-title">
              {description}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={parseInt(totalrating)}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">₨ {price}</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      {/* <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={img1} className="img-fluid" alt="product image" />
            <img src={img2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">{title}</h6>
            <h5 className="product-title">
              {description}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={rating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">${price}</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div> */}
    </>
  );
};

export default ProductCard;

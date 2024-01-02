import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { useEffect } from "react";
// import { services } from "../utils/Data";

// useState , useEffect, axios , fetch ,  {auth-> localstorage cookies}

const Home = (props) => {
  const {womensWear, mensWear, footWear, setSelectedProduct} = props;

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  }

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="main-banner position-relative ">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a5eda5113851481.602fdc6275581.png"
                className="img-fluid rounded-3"
                alt="main banner"
              />

            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="https://sandwichfashion.ca/cdn/shop/files/titel1400x1000_New_in_banner_-_V2_1024x.jpg?v=1677015305"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />

              </div>
              <div className="small-banner position-relative">
                <img
                  src="https://www.babycouture.in/blog/wp-content/uploads/2016/08/Little_girl_shopping.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />

              </div>
              <div className="small-banner position-relative ">
                <img
                  src="https://img-d.streetstylestore.com/homepage-images/oct-23/2for1099ShoeCover_31Oct.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />

              </div>
              <div className="small-banner position-relative ">
                <img
                  src="https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg?w=996&t=st=1699394358~exp=1699394958~hmac=c918340cba4d14db94bcf414266a271d776439943d4b3e865332a6a0dfd49ddc"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />

              </div>
            </div>
          </div>
        </div>
      </Container>
 
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12" id='womensWear'>
            <h3 className="section-heading">Ladies Collection</h3>
          </div>
          <div className="row">
          {womensWear.map(product => <ProductCard key={product._id} handleProductClick={handleProductClick} product={product} />)}
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12" id='mensWear'>
            <h3 className="section-heading">Gens Collection</h3>
          </div>
        </div>
        <div className="row align-items-stretch">

          {mensWear.map(product => <ProductCard key={product._id} handleProductClick={handleProductClick} product={{...product, "type": "Clothing", "category": "Men's Wear"}} />)}
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12" id='footWear'>
            <h3 className="section-heading">Foot Wear</h3>
          </div>
        </div>
        <div className="row">
          {footWear.map(product => <ProductCard key={product._id} handleProductClick={handleProductClick} product={{...product, "type": "Shoes", "category": "Foot Wear"}} />)}
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/412/small/nike-logo-black-with-name-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://media.designrush.com/inspiration_images/292255/conversions/levi_logo_4_82250bd000e1-mobile.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0002/6174/brand.gif?itok=prupZsGt" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://seeklogo.com/images/A/allen-solly-logo-D61D9C1551-seeklogo.com.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/431/small/puma-logo-black-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://www.freepnglogos.com/uploads/gucci-logo-png/roma-optical-gucci-logo-free-download-0.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3-4HYI5MLQZ6a1WVs2PgAYG_0JKE8rzk0Q&usqp=CAU" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
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
              {/* <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div> */}
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
                {/* <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div> */}
              </div>
              <div className="small-banner position-relative">
                <img
                  src="https://www.babycouture.in/blog/wp-content/uploads/2016/08/Little_girl_shopping.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                {/* <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div> */}
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="https://img-d.streetstylestore.com/homepage-images/oct-23/2for1099ShoeCover_31Oct.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                {/* <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div> */}
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg?w=996&t=st=1699394358~exp=1699394958~hmac=c918340cba4d14db94bcf414266a271d776439943d4b3e865332a6a0dfd49ddc"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                {/* <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <Container class1="home-wrapper-2 py-5">          Error Code
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container> */}
      {/* <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Ladies Collection</h3>
          </div>
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
          <div className="row">
          {womensWear.map(product => <ProductCard key={product.id} handleProductClick={handleProductClick} product={{...product, "type": "Clothing", "category": "Women's Wear"}} />)}
          </div>
        </div>
      </Container>

      {/* <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      {/* <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container> */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Gens Collection</h3>
          </div>
        </div>
        <div className="row align-items-stretch">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
          {mensWear.map(product => <ProductCard key={product.id} handleProductClick={handleProductClick} product={{...product, "type": "Clothing", "category": "Men's Wear"}} />)}
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Foot Wear</h3>
          </div>
        </div>
        <div className="row">
          {footWear.map(product => <ProductCard key={product.id} handleProductClick={handleProductClick} product={{...product, "type": "Shoes", "category": "Foot Wear"}} />)}
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

      {/* <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container> */}
    </>
  );
};

export default Home;

import React, {useState} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPloicy from "./pages/RefundPloicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndContions from "./pages/TermAndContions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
function App() {

  const womensWear = [{id: 11, img1: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/j/9/a/xs-194-brown-aahwan-original-imagqh96rshyzmvg.jpeg?q=70", img2: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/x/g/z/xs-194-brown-aahwan-original-imagqh96srvhzk3y.jpeg?q=70", title: "Women A-line Brown Dress", description: "Short puff sleeve, brown color, ideal for women. Suitable for western wear", rating: 4, cost: 450.00},
  {id: 12, img1: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/c/z/4/l-reg-black-plet-l-maya-impex-original-imagmvezbztt9ygd.jpeg?q=70", img2: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/j/9/h/l-reg-black-plet-l-maya-impex-original-imagmvez4v55ahju.jpeg?q=70", title: "Women Fit and Flare Black, Black Dress", description: "The Dress Combines Ethnic With The Fashion Of Today And Makes You Stand Out.", rating: 4, cost: 500.00},
  {id: 13, img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/a/tr:w-2072,/cad8931NYKFF_LSDY0003_1.jpg?rnd=20200526195200", img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/a/cad8931NYKFF_LSDY0003_2.jpg?rnd=20200526195200", title: "One Shoulder Beige Ruffle Fit And Flare", description: "Sparkle on in this beautiful one shoulder dress with enchanting ruffles. ", rating: 5, cost: 2500.00},
  {id: 14, img1: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/d/7/k/xl-md889-oomph-original-imagt4yzw3766qxz.jpeg?q=70", img2: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/1/t/i/xl-md889-oomph-original-imagt4yzsef2pxmc.jpeg?q=70", title: "Women Sheath Black, White Dress", description: "Short Sexy Backless Dress With Tie-detail. Crepe Fabric, Soft On Skin And Wrinkle Free.", rating: 3, cost: 300.00},
  {id: 15, img1: "https://rukminim2.flixcart.com/image/1920/2560/xif0q/shopsy-dress/g/d/y/m-western-dresses-for-women-girls-dress-womens-stylish-indo-original-imagz9gkzxgfrrfz.jpeg?q=90", img2: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTSiXbXyT6Nb42f-IwOktxNZrpVZpkfA6D34YcliY5dCyT5OFoafhttTmeRxpagEjGEL7EiDrY2N2PoHgIL7whw-RTHD4HidA&usqp=CAY", title: "Women Maxi Black Dress", description: "Western Dresses For Women Girls Dress Womens Stylish Indo Latest Design", rating: 4, cost: 340.00},
  {id: 16, img1: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9wsBwXt-jZhWo2GcfVEAUTU68igUS5WfuzOjNqaxMnrcYHvp89cmqlnkzfrSDGblnhGMukoN25X4lEkJfZH2II6dfDpGwDA&usqp=CAY", img2: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRuRTCHnf-bqtCGD8ji4JTc_3HRMUZ_R6czQDbSoJ_ON-55zsTZvpfP3EPd6eNE9FHqz58rWWJ91mQ6Ieag4nZ35kZj0uCSdQ&usqp=CAY", title: "Madame Mauve Dress", description: "Made with the finest material, it features a round neck and full sleeves.", rating: 5, cost: 1800.00},
  {id: 17, img1: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOtC2Me3ENdBgalLtMpzMjxSdo1ohyr0IIY95g7demK4ovbiNduv4J1R0Ce27DR3h2Tzsywku222HXwxM4fEU_eA81bLK4yg&usqp=CAY", img2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcReuZEqrxf-VuyT3AK909-W0lSgGTSWndoHLnx8aRCWPPaKmX21T9E8DzCybt_tgQ0L4hzar4TArHbyRlkiC2_RgurU53a_&usqp=CAY", title: "Sheetal Associates Women Maxi Red Dress", description: "Easy And Elegant, Printed Flower This Maxi Dress To Give Your Closet An Effortless Sartorial Update", rating: 5, cost: 500.00},
  {id: 18, img1: "https://assets.ajio.com/medias/sys_master/root/20230801/OupT/64c80b90a9b42d15c97de9b2/-1117Wx1400H-466401156-black-MODEL2.jpg", img2: "https://assets.ajio.com/medias/sys_master/root/20230801/EycS/64c80b90a9b42d15c97de9b9/-1117Wx1400H-466401156-black-MODEL3.jpg", title: "Square-Neck Gown Dress with Side Slit", description: "Short Sexy Backless Dress With Tie-detail. Crepe Fabric, Soft On Skin And Wrinkle Free.", rating: 4, cost: 800.00},
  
  ]
  
  const mensWear = [
    {id: 21, img1: "https://getketchadmin.getketch.com/product/8905040784526/660/HLSS000293_1.JPG", img2: "https://getketchadmin.getketch.com/product/8905040784526/660/HLSS000293_3.JPG", title: "Highlander Men Olive Casual Solid Regular Fit Sweatshirts", description: "Mock buttons near the neck add an interesting design dimension to this sweatshirt.", rating: 4, cost: 550.00},
    {id: 22, img1: "https://assets.ajio.com/medias/sys_master/root/20230628/LOzD/649ba774a9b42d15c905f4ef/-1117Wx1400H-465812611-white-MODEL.jpg", img2: "https://assets.ajio.com/medias/sys_master/root/20230628/xihO/649ba774a9b42d15c905f524/-1117Wx1400H-465812611-white-MODEL3.jpg", title: "Lewel Men Checked Slim Fit Hooded Shirt", description: "White, Men Checked Slim Fit Hooded Shirt Shirts perfect for Casual occasion.", rating: 5, cost: 500.00},
    {id: 23, img1: "https://cdn-media.powerlook.in/catalog/product/5/9/5925321.jpg", img2: "https://cdn-media.powerlook.in/catalog/product/6/9/6925321.jpg", title: "Grey Structured Knit Oversized Shirt", description: "Grab the spotlight in our grey structured knit oversized shirts for men.", rating: 5, cost: 1000.00},
    {id: 24, img1: "https://getketchadmin.getketch.com/product/8905040896045/660/HLJK000476_1.JPG", img2: "https://getketchadmin.getketch.com/product/8905040896045/660/HLJK000476_3.JPG", title: "Highlander Men Bomber Jacket", description: "Made from soft cotton fabric, ensures ease of wearing. Also comes in a regular length with long sleeves and zipper closure.", rating: 4, cost: 700.00},
    {id: 25, img1: "https://vastramay.com/cdn/shop/files/VASMCO007GY_1_741fddb1-d460-424d-a063-57b2cf862b2d.jpg?crop=center&height=975&v=1690801560&width=650", img2: "https://vastramay.com/cdn/shop/files/VASMCO007GY_3_234b13bc-8f0c-46e6-9306-d018c79bed79.jpg?crop=center&height=975&v=1690801560&width=650", title: "VASTRAMAY Men's Grey Indo Western Combo Set", description: "Cream color solid straight knee length kurta, Cream solid churidar, drawstring closure", rating: 5, cost: 4200.00},
    {id: 26, img1: "https://www.houseofchikankari.in/cdn/shop/products/House-Of-Chikankari-Aswad-Chikankari-Cotton-Straight-Men-Kurta-Black-And-Beige-00004.jpg?v=1696485121&width=1800", img2: "https://www.houseofchikankari.in/cdn/shop/products/House-Of-Chikankari-Aswad-Chikankari-Cotton-Straight-Men-Kurta-Black-And-Beige-00001.jpg?v=1696485121&width=1800", title: "Aswad Cotton Straight Men's Kurta", description: "Straight-fit men’s kurta with intricate chikan embroidery. Perfect for all Occasions Breathable and summer Fabric", rating: 4, cost: 2500.00},
    {id: 27, img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/a/2a63d0fKA_0160_5339_C101_3.jpg?rnd=20200526195200", img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/a/2a63d0fKA_0160_5339_C101_4.jpg?rnd=20200526195200", title: "KISAH MEN Brown KURTA JACKET SET", description: "The jacket is made from Cotton Blend material, it's Front open style makes it look extremely sharp.", rating: 4, cost: 3200.00},
    {id: 28, img1: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQPYrX8qr6Iv-knZQUlkRTPdVJLQor2UAiUJJ4SbviRTNVRq2Nj0gcTIAN3R89L3H7AfiweSGOvOGxeg-n1kyCK_Cy_W3R4g&usqp=CAY", img2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1BLlBo7vAZHUnJPp-ivbtvN3yjUo2Dc53Wv6fz08af5LODxZHU03hpaK5V7SKRm9Tp3VdGmLV1gBtsRoO3ri-hUEEw9oZuQ&usqp=CAY", title: "Men Embroidered Jacquard Ethnic Dress", description: "An Ideal Pick For Traditional Events And Parties, This Fashionable Kurta Has Been Designed To Perfection With A Banded Collar For A Dash Of Style", rating: 3, cost: 1000.00},
  ]
  
  const footWear = [
    {id: 31, img1: "https://www.birkenstock.in/cdn/shop/files/1025569_sole_1024x1024.jpg?v=1690898247", img2: "https://www.birkenstock.in/cdn/shop/files/1025569_top_1024x1024.jpg?v=1690898247", title: "Oswego Suede Leather", description: "The casual low shoe features elastic inserts which make it easy to put it on and take it off in no time.", rating: 5, cost: 6250.00},
    {id: 32, img1: "https://www.birkenstock.in/cdn/shop/files/1025473_sole_1024x1024.jpg?v=1690893096", img2: "https://www.birkenstock.in/cdn/shop/files/1025473_top_1024x1024.jpg?v=1690893096", title: "Naples Suede Leather", description: "The moccasin style with striking stitching lends this sandal a unique and masculine appearance.", rating: 4, cost: 5500.00},
    {id: 33, img1: "https://www.birkenstock.in/cdn/shop/products/1019490_sole_cd43edf5-c7b3-4f15-99ed-89212b8944f4_1024x1024.jpg?v=1685372833", img2: "https://www.birkenstock.in/cdn/shop/products/1019490_top_ef41a774-eb3b-463e-8f4d-4633cba0656b_1024x1024.jpg?v=1685372833", title: "Buckley Suede Leather", description: "Its natural design is down to the upper made from especially soft suede, which hugs the foot like a second skin.", rating: 4, cost: 3200.00},
    {id: 34, img1: "https://www.birkenstock.in/cdn/shop/products/1023176_sole_d162e4d5-ac79-4209-b46b-964e0c9f72f0_1024x1024.jpg?v=1685370957", img2: "https://www.birkenstock.in/cdn/shop/products/1023176_top_248c7a65-119b-4b3f-b0ee-b311f3007401_1024x1024.jpg?v=1685370957", title: "Zermatt Shearling Wool Felt", description: "Perfect for all year round! Comes with a snug shearling lining to keep your feet cozy when the temperatures drop.", rating: 5, cost: 1500.00}, 
    {id: 35, img1: "https://www.birkenstock.in/cdn/shop/files/1025807_sole_1024x1024.jpg?v=1695795499", img2: "https://www.birkenstock.in/cdn/shop/files/1025807_top_1024x1024.jpg?v=1695795499", title: "Bend Mid Dip Natural Leather/Textile/Felt", description: "The BIRKENSTOCK Bend Mid is an ankle-high shoe which boasts a simple design and can be combined with almost any outfit.", rating: 5, cost: 9500.00},
    {id: 36, img1: "https://www.birkenstock.in/cdn/shop/files/1025574-5_1024x1024.jpg?v=1690795668", img2: "https://www.birkenstock.in/cdn/shop/files/1025574-6_1024x1024.jpg?v=1690795668", title: "Bend Low Suede Embossed", description: "Perfect for authentic streetstyle outfits! The upper is made from soft, embossed suede.", rating: 4, cost: 6900.00},
    {id: 37, img1: "https://www.birkenstock.in/cdn/shop/files/1017319_sole_29903fd6-513b-4a49-bc6f-06ca425ce363_1024x1024.jpg?v=1684304652", img2: "https://www.birkenstock.in/cdn/shop/files/1017319_top_6c64cd32-3b88-4f11-a24d-0286d8e428a2_1024x1024.jpg?v=1684304652", title: "Stalon Nubuck Leather", description: "Removable, anatomically shaped cork-latex footbed", rating: 5, cost: 8200.00},
    {id: 38, img1: "https://www.birkenstock.in/cdn/shop/products/1011102_sole_1024x1024.jpg?v=1627406656", img2: "https://www.birkenstock.in/cdn/shop/products/1011102_top_1024x1024.jpg?v=1627406652", title: "Laramie Natural Leather", description: "It's a staple that no wardrobe should be without. The upper is made from high-quality, soft natural leather.", rating: 5, cost: 16000.00},
  ]

  const [selectedProduct, setSelectedProduct] = useState({});
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

  const initialQuantity = localStorage.getItem("quantity") ? JSON.parse(localStorage.getItem("quantity")) : new Array(cart.length).fill(1)
  const [quantity, setQuantity] = useState(initialQuantity)
  const totalCost = cart.map((item, i) => item.cost*quantity[i]).reduce((a, b) => a+b, 0)

  const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : []);
  const [compare, setCompare] = useState(localStorage.getItem("compare") ? JSON.parse(localStorage.getItem("compare")) : []);

  const handleAddCart = (product) => {
    setCart([...cart, product]);
    setQuantity([...quantity, 1])
  }

  const handleAddWishlist = (product) => {
    setWishlist([...wishlist, product]);
  }

  const handleAddCompare = (product) => {
    setCompare([...compare, product]);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout cartItemsCount={quantity.reduce((a, b)=>a+b, 0)} totalCost={totalCost} />}>
            <Route index element={<Home womensWear={womensWear} mensWear={mensWear} footWear={footWear} setSelectedProduct={setSelectedProduct} />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            {selectedProduct && <Route path="product/:id" element={<SingleProduct product={selectedProduct} handleAddCart={handleAddCart} handleAddWishlist={handleAddWishlist} handleAddCompare={handleAddCompare} />} />}
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} totalCost={totalCost} />} />
            <Route path="checkout" element={<Checkout totalCost={totalCost} />} />
            <Route path="compare-product" element={<CompareProduct compare={compare} setCompare={setCompare} />} />
            <Route path="wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPloicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndContions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

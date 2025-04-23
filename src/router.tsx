import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/main/homepage";
import Navbarcomponent from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Computer from "./components/product/computer/computer";
import Detailcomputer from "./components/product/computer/detail.computer";
import SmartPhones from "./components/product/smartphone/SmartPhones";
import WishlistData from "./components/smallpage/wishlist";
import Cartcomponet from "./components/shopping/cart";
import { ComparePage } from "./components/compare/computer.compare";
import Ordertrack from "./components/trackoreder/ordertrack";
import Orderdetail from "./components/trackoreder/order.detail";
import OrderTracker from "./components/trackoreder/order.detail";
import AuthPage from "./components/auth/login/singup";
const Router = () => {
  return (
    <>
      <Navbarcomponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/computer-and-laptop" element={<Computer />} />
        <Route
          path="/computer-and-laptop/product/:id"
          element={<Detailcomputer />}
        />
        <Route path="/shop/smart-phones" element={<SmartPhones />} />
        <Route path="/shop/headphone" element={<Computer />} />
        <Route path="/shop/mobile-accessories" element={<Computer />} />
        <Route path="/shop/gaming-console" element={<Computer />} />
        <Route path="/shop/camera-and-photo" element={<Computer />} />
        <Route path="/shop/tv-and-home-appliances" element={<Computer />} />
        <Route path="/shop/watch-and-accessories" element={<Computer />} />
        <Route path="/shop/gps-and-navigation" element={<Computer />} />
        <Route path="/shop/wearable-technology" element={<Computer />} />
        <Route path="/wishlist" element={<WishlistData />} />
        <Route path="/shoppingcart" element={<Cartcomponet />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/trackorder" element={<Ordertrack />} />
        <Route path="track-detail" element={<OrderTracker />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;

import { Routes, Route,  } from "react-router-dom";
import Homepage from "./components/homepage/main/homepage";
import Computer from "./components/product/computer/computer";
import Detailcomputer from "./components/product/computer/detail.computer";
import SmartPhones from "./components/product/smartphone/SmartPhones";
import WishlistData from "./components/smallpage/wishlist";
import Cartcomponet from "./components/shopping/cart";
import { ComparePage } from "./components/compare/computer.compare";
import Ordertrack from "./components/trackoreder/ordertrack";
import OrderTracker from "./components/trackoreder/order.detail";
import AuthPage from "./components/auth/login/singup";
import { FAQcomponent } from "./components/small/faqs";
import NotFoundPage from "./components/small/notfound";
import MainLayout from "./components/utils/router2";
import Aboutcomponent from "./components/about/about";
import Custumercomponent from "./components/support/custumer";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} /> {/* / */}
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
          <Route path="/needhelp" element={<FAQcomponent />} />
          <Route path="/about" element={<Aboutcomponent />} />
          <Route path="/customersupport" element={<Custumercomponent />} />
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;

import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/main/homepage";
import Computer from "./components/product/computer/computer";
import Detailcomputer from "./components/product/computer/detail.computer";
import SmartPhones from "./components/product/smartphone/SmartPhones";
import WishlistData from "./components/wishlist/wishlist";
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
import Example from "./components/example";
import Accessoriescompoent from "./components/product/Accessories/Accessories";
import Detailaccessories from "./components/product/Accessories/detail.accessories";
import DetailSmartphone from "./components/product/smartphone/detail.smart";
import HeadPhonecomponent from "./components/product/headphone/headphone";
import HeadphoneDetail from "./components/product/headphone/headphone.detail";
import MobileComponent from "./components/product/mobileaccessory/accessory";
import MobileAccessoriesDetail from "./components/product/mobileaccessory/detail.accesssory";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/computer-and-laptop" element={<Computer />} />
          <Route
            path="/computer-and-laptop/product/:id"
            element={<Detailcomputer />}
          />
          <Route
            path="/computer-accessories"
            element={<Accessoriescompoent />}
          />
          <Route
            path="/computer-accessories/product/:id"
            element={<Detailaccessories />}
          />
          <Route path="/smart-phones" element={<SmartPhones />} />
          <Route
            path="/smart-phones/product/:id"
            element={<DetailSmartphone />}
          />
          <Route path="/headphone" element={<HeadPhonecomponent />} />
          <Route path="/headphone/product/:id" element={<HeadphoneDetail />} />
          <Route path="/mobile-accessories" element={<MobileComponent />} />
          <Route
            path="/mobile-accessories/product/:id"
            element={<MobileAccessoriesDetail />}
          />
          <Route path="/gaming-console" element={<Computer />} />
          <Route path="/camera-and-photo" element={<Computer />} />
          <Route path="/tv-and-home-appliances" element={<Computer />} />
          <Route path="/watch-and-accessories" element={<Computer />} />
          <Route path="/gps-and-navigation" element={<Computer />} />
          <Route path="/wearable-technology" element={<Computer />} />
          <Route path="/wishlist" element={<WishlistData />} />
          <Route path="/shoppingcart" element={<Cartcomponet />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/trackorder" element={<Ordertrack />} />
          <Route path="track-detail" element={<OrderTracker />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/needhelp" element={<FAQcomponent />} />
          <Route path="/about" element={<Aboutcomponent />} />
          <Route path="/customersupport" element={<Custumercomponent />} />
          <Route path="/aa" element={<Example />} />
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;

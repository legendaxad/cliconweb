// src/components/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbarcomponent from "../navbar/navbar";
import Footer from "../footer/footer";

export default function MainLayout() {
  return (
    <>
      <Navbarcomponent />
      <Outlet /> {/* This will render the nested child route */}
      <Footer />
    </>
  );
}

import { Route, Routes, useLocation } from "react-router-dom";
import Header from "@/components/client/Header";
import Footer from "@/components/shared/Footer";

import AdminLayout from "@/components/layouts/AdminLayout";
import Layout from "@/components/layouts/Layout";

import CartModal from "@/components/client/CartModal";
import AboutPage from "@/pages/client/AboutPage";
import ContactPage from "@/pages/client/ContactPage";
import MenuPage from "@/pages/client/MenuPage";

import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminMenu from "@/pages/admin/AdminMenu";

import AdminCreateMeal from "@/pages/admin/AdminCreateMeal";
import AdminOrders from "@/pages/admin/AdminOrders";

import "./App.css";

export default function App() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header headerImg="/logo.png" />}

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MenuPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/cart" element={<CartModal />} />
        </Route>


        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="foods" element={<AdminMenu />} />
          <Route path="foods/new" element={<AdminCreateMeal />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

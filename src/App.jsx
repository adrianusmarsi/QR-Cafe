import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order/:tableNumber" element={<OrderPage />} />
        <Route
          path="*"
          element={
            <div className="container mt-5">
              <h1>Halaman Tidak Ditemukan</h1>
            </div>
          }
        />
      </Routes>
    </CartProvider>
  );
}

export default App;

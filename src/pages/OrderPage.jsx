import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import menuData from "../data/menuData";
import { useCart } from "../context/CartContext";

const OrderPage = () => {
  const { tableNumber } = useParams();
  const [filter, setFilter] = useState("semua");
  const [searchTerm, setSearchTerm] = useState("");
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();

  // Validasi nomor meja
  useEffect(() => {
    if (!tableNumber || isNaN(tableNumber) || parseInt(tableNumber) < 1) {
      navigate("/");
    }
  }, [tableNumber, navigate]);

  const filteredItems = menuData.filter((item) => {
    const matchesCategory = filter === "semua" || item.category === filter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header tableNumber={tableNumber} />

      <div className="container mt-4 flex-grow-1">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
              <div className="mb-3 mb-md-0">
                <div className="btn-group">
                  {["semua", "minuman", "makanan"].map((cat) => (
                    <button
                      key={cat}
                      className={`btn ${
                        filter === cat ? "btn-primary" : "btn-outline-primary"
                      }`}
                      onClick={() => setFilter(cat)}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-100 w-md-50">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari menu..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div className="col-md-6 mb-4" key={item.id}>
                    <MenuItem item={item} onAdd={addToCart} />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <i className="bi bi-search display-1 text-muted mb-3"></i>
                  <h3>Menu tidak ditemukan</h3>
                  <p>Coba kata kunci lain atau pilih kategori berbeda</p>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <Cart tableNumber={tableNumber} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = ({ tableNumber }) => {
  const navigate = useNavigate();
  const { cart, removeFromCart, total, cartCount } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = () => {
    setIsSubmitting(true);

    // Simulasi pengiriman pesanan
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        `Pesanan meja ${tableNumber} berhasil dikirim!\nTotal: Rp ${total.toLocaleString(
          "id-ID"
        )}`
      );
      navigate("/");
    }, 1500);
  };

  return (
    <div className="card sticky-top shadow-lg" style={{ top: "20px" }}>
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="m-0">Keranjang Pesanan</h5>
        <span className="badge bg-light text-primary">{cartCount} item</span>
      </div>

      <div className="card-body p-0">
        {cart.length === 0 ? (
          <div className="text-center p-4">
            <i className="bi bi-cart-x display-4 text-muted mb-3"></i>
            <p className="text-muted">Keranjang masih kosong</p>
            <p className="small">Pilih menu dari daftar di samping</p>
          </div>
        ) : (
          <div className="list-group list-group-flush">
            {cart.map((item) => (
              <div key={item.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge bg-primary me-2">
                      {item.quantity}x
                    </span>
                    <span>{item.name}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="me-2">
                      Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </span>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card-footer">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-bold">Total:</span>
          <span className="fw-bold fs-5 text-primary">
            Rp {total.toLocaleString("id-ID")}
          </span>
        </div>

        <button
          className={`btn btn-success w-100 ${isSubmitting ? "disabled" : ""}`}
          disabled={cart.length === 0 || isSubmitting}
          onClick={handleCheckout}
        >
          {isSubmitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Mengirim...
            </>
          ) : (
            `Kirim Pesanan (Meja ${tableNumber})`
          )}
        </button>
      </div>
    </div>
  );
};

export default Cart;

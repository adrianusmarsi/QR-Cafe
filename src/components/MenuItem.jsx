import React, { useState } from "react";

const MenuItem = ({ item, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAdd({ ...item, quantity });
    setQuantity(1);
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="card-title mb-1">{item.name}</h5>
            <p className="card-text text-muted small mb-2">
              {item.description}
            </p>
          </div>
          <span className="badge bg-info">{item.category}</span>
        </div>

        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-primary">
              Rp {item.price.toLocaleString("id-ID")}
            </span>

            <div className="d-flex align-items-center">
              <div className="btn-group btn-group-sm me-2">
                <button
                  className="btn btn-outline-secondary"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="btn border" style={{ minWidth: "40px" }}>
                  {quantity}
                </span>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-primary btn-sm"
                onClick={handleAddToCart}
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

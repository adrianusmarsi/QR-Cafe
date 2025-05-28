import React from "react";
import { Link } from "react-router-dom";

const Header = ({ tableNumber }) => {
  return (
    <header className="bg-primary text-white py-3 shadow">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-white text-decoration-none">
            <h1 className="h3 m-0">Cafe Bahagia</h1>
          </Link>
          {tableNumber && (
            <div className="d-flex align-items-center">
              <span className="me-2">Meja</span>
              <div
                className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "36px", height: "36px" }}
              >
                <span className="fw-bold">{tableNumber}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

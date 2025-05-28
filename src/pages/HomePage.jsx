import React, { useState } from "react";
import QRCodeGenerator from "../components/QRCodeGenerator";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [tableNumber, setTableNumber] = useState(5);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">
              <i className="bi bi-cup-hot me-2"></i>
              Cafe Bahagia
            </h1>
            <p className="lead">Pesan menu favorit Anda langsung dari meja</p>
          </div>

          <div className="card shadow-lg border-0 mb-5">
            <div className="card-header bg-white border-0 py-4">
              <h2 className="card-title text-center mb-0">Pesan via QR Code</h2>
            </div>
            <div className="card-body p-4 p-md-5">
              <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="bg-light rounded p-3 p-md-4">
                    <QRCodeGenerator tableNumber={tableNumber} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-2">
                    <h3 className="h4 mb-3">Cara Memesan:</h3>
                    <ol className="list-group list-group-numbered list-group-flush">
                      <li className="list-group-item border-0 ps-0">
                        Scan QR code di samping
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        Pilih menu yang diinginkan
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        Tambahkan ke keranjang
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        Kirim pesanan
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        Tunggu pesanan diantar
                      </li>
                    </ol>

                    <div className="mt-4">
                      <label
                        htmlFor="tableNumber"
                        className="form-label fw-bold"
                      >
                        Nomor Meja:
                      </label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          id="tableNumber"
                          min="1"
                          max="50"
                          value={tableNumber}
                          onChange={(e) =>
                            setTableNumber(
                              Math.max(1, parseInt(e.target.value) || 1)
                            )
                          }
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() =>
                            setTableNumber((t) => Math.max(1, t - 1))
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() => setTableNumber((t) => t + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white border-0 py-3 text-center">
              <p className="text-muted mb-0">
                <i className="bi bi-info-circle me-1"></i>
                Scan QR code di atas untuk membuka menu pemesanan
              </p>
            </div>
          </div>

          <div className="text-center">
            <p>Atau gunakan link berikut untuk memesan:</p>
            <Link
              to={`/order/${tableNumber}`}
              className="btn btn-lg btn-outline-primary"
            >
              Buka Menu Pemesanan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

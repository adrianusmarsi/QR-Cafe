import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Cafe Bahagia</h5>
            <p className="mb-0">Jalan Kenangan Indah No. 123</p>
            <p className="mb-0">Buka setiap hari 08:00 - 22:00</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Kontak Kami</h5>
            <p className="mb-0">Telepon: (021) 1234-5678</p>
            <p className="mb-0">Email: info@cafebahagia.com</p>
          </div>
        </div>
        <hr className="my-3 bg-light" />
        <p className="text-center mb-0">
          &copy; 2025 Cafe Bahagia. Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

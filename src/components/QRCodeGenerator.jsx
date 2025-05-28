import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";

const QRCodeGenerator = ({ tableNumber }) => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");

  useEffect(() => {
    // Menggunakan useEffect untuk mendapatkan URL setelah komponen di-mount
    setUrl(`${window.location.origin}/order/${tableNumber}`);
  }, [tableNumber]);

  const handleClick = () => {
    navigate(`/order/${tableNumber}`);
  };

  return (
    <div className="text-center p-3">
      <div
        className="border rounded bg-white p-3 d-inline-block cursor-pointer"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
        title="Klik untuk membuka menu"
      >
        <QRCodeSVG
          value={url}
          size={200}
          bgColor={"#ffffff"}
          fgColor={"#0d6efd"}
          level={"H"}
          includeMargin={true}
        />
      </div>
      <p className="mt-3 fw-medium">
        Meja: <span className="badge bg-primary">{tableNumber}</span>
      </p>
      <p className="small text-muted mt-2">Klik QR code untuk membuka menu</p>
    </div>
  );
};

export default QRCodeGenerator;

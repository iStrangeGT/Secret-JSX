import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Payment = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [qrImage, setQrImage] = useState("");

  // Load order details from localStorage
  useEffect(() => {
    const details = localStorage.getItem("orderDetails");
    if (details) {
      setOrderDetails(JSON.parse(details));
    }
  }, []);

  const handlePayment = (method) => {
    setSelectedPayment(method);

    // Set QR image based on the selected payment method
    const qrImages = {
      Dana: "./dana-qr.jpg", // Replace with your Dana QR image path
      GoPay: "./gopay-qr.jpg", // Replace with your GoPay QR image path
      QRIS: "./qris-qr.jpg", // Replace with your QRIS QR image path
    };

    setQrImage(qrImages[method]);
    setShowQR(true);
  };

  const closeModal = () => {
    setShowQR(false);
  };

  if (!orderDetails) {
    return <p className="text-center text-gray-500">No order details found.</p>;
  }

  // Construct WhatsApp message dynamically
  const whatsAppMessage = `https://wa.me/6288269956317?text=Bang%20gw%20udah%20bayar%20nih%20untuk%20produk%20${encodeURIComponent(
    orderDetails.productName
  )}%20sebesar%20${encodeURIComponent(orderDetails.price)}${
    orderDetails.selectedOS ? `%20OS%20yang%20dipilih%20adalah%20${encodeURIComponent(orderDetails.selectedOS)}` : ""
  }%20via%20${selectedPayment}.`;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/70 rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex items-center mb-4">
          <h2 className="text-3xl font-extrabold text-blue-800">PAYMENT DETAILS</h2>
          <img
            src="./Verified.gif" // Replace with your GIF path
            alt="Verified"
            className="w-8 h-8 ml-2"
          />
        </div>
        <div className="text-gray-600">
          <p className="mb-2">Product: {orderDetails.productName}</p>
          <p className="mb-2">Price: {orderDetails.price}</p>
          {orderDetails.selectedOS && (
            <p className="mb-4">Operating System: {orderDetails.selectedOS}</p>
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-500 mb-4">Choose Payment Method</h3>
        <div className="space-y-3">
          {/* Dana Button */}
          <button
            onClick={() => handlePayment("Dana")}
            className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg flex items-center hover:bg-gray-400"
          >
            <img src="./dana.png" alt="Dana" className="w-6 h-6 mr-3" />
            Pay with Dana
          </button>
          {/* GoPay Button */}
          <button
            onClick={() => handlePayment("GoPay")}
            className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg flex items-center hover:bg-gray-400"
          >
            <img src="./gopay.png" alt="GoPay" className="w-6 h-6 mr-3" />
            Pay with GoPay
          </button>
          {/* QRIS Button */}
          <button
            onClick={() => handlePayment("QRIS")}
            className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg flex items-center hover:bg-gray-400"
          >
            <img src="./qris.png" alt="QRIS" className="w-6 h-2 mr-3" />
            Pay with QRIS
          </button>
        </div>
        {showQR && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="bg-white/70 p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-lg font-bold text-blue-800 mb-4">
                Scan QR for {selectedPayment}
              </h3>
              <div className="flex justify-center mb-4">
                <img src={qrImage} alt={`${selectedPayment} QR`} className="w-48 h-48" />
              </div>
              <a
                href={qrImage}
                download={`${selectedPayment}-QR.jpg`}
                className=" flex bg-gray-500 text-white py-2 px-16 rounded-lg text-center  hover:bg-gray-600 mb-4"
              >
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 3V16M12 16L8 12M12 16L16 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 19H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                Download QR
              </a>
              <a
                href={whatsAppMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-green-500 text-white py-2 px-9 rounded-lg text-center hover:bg-green-600 mb-4"
              >
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-1"
  >
    <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="white" />
    <path d="M8 12L11 15L16 9" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>Confirm Your Payment
              </a>
              <button
                onClick={closeModal}
                className="bg-red-500 flex text-white py-2 px-24 rounded-lg hover:bg-red-600 w-full"
              >
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
  <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="white"/>
  <path d="M9 9L15 15" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 9L9 15" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Payment;

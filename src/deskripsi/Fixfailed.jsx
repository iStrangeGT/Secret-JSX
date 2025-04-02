import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Fixfailed = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBuyNow = () => {
    const orderDetails = {
      productName: "Fix A Download Failed GTPS",
      price: "RP.20.000",
    };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="py-8 bg-white/70 min-h-screen flex md:py-16 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-full" src="./cpp.png" alt="dawg" />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-blue-800 sm:text-2xl">
              [Services] <span className="text-gray-500">Fix A Download Failed GTPS</span>
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-500 sm:text-3xl">RP.20.000</p>
            </div>

            <div className="mt-4 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <button
                onClick={handleBuyNow}
                className="text-white mt-4 sm:mt-0 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Buy Now
              </button>
            </div>

            <hr className="my-6 md:my-8 border-gray-200" />

            <p className="mb-6 text-gray-500">
              Description:

            </p>


          </div>
        </div>
      </div>

      {showModal && (
         <motion.div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.8 }}
       >
          <div className="bg-white/90 rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4 text-blue-800">Order Details</h2>
            <div className="text-gray-600">
              <p className="mb-2">Fix A Download Failed GTPS</p>
              <p className="mb-3">Price: RP.20.000</p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Close
              </button>
              <Link to="/payment">
                <button
                  className="text-white mt-4 sm:mt-0 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Buy Now
                </button>
              </Link>
              
            </div>
            
          </div>
          
          </motion.div>
        
      )}
    </section>
  );
};

export default Fixfailed;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Packet14GB = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [warning, setWarning] = useState(false);
  const operatingSystems = {
    Windows: ["Windows Server 2010", "Windows Server 2011", "Windows Server 2012 R2", "Windows Server 2016", "Windows Server 2019","Windows Server 2022"],
    Linux: ["AlmaLinux 8.x", "AlmaLinux 9.x", "Rocky Linux 8.x", "Rocky Linux 9.x"],
    Ubuntu: ["Ubuntu 24.10", "Ubuntu 24.04 LTS", "Ubuntu 22.04 LTS", "Ubuntu 20.04 LTS"],
    Debian: ["Debian 11 (Bullseye)", "Debian 12 (Bookworm)"],
    Fedora: ["Fedora 40 (x64)", "Fedora 41 (x64)"],
    CentOS: ["CentOS Stream 9"],
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setWarning(false); // Clear warning when an option is selected
  };

  const handleBuyNow = () => {
    if (!selectedOption) {
      setWarning(true); // Show warning if no OS is selected
    } else {
      const orderDetails = {
        productName: "VPS/RDP 4GB 2vCORE",
        price: "RP.25.000",
        selectedOS: selectedOption,
      };
      localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="py-8 bg-white/70 min-h-screen flex md:py-16 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-full" src="./DigitalOcean.png" alt="pepek" />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-blue-400 sm:text-2xl">
              [DigitalOcean] <span className="text-gray-500">VPS/RDP 4GB 2vCORE</span>
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-500 sm:text-3xl">RP.25.000</p>
            </div>
            <div className="max-w-md mt-4">
              <h2 className="text-xl text-gray-500 font-bold mb-4">Select Operating System</h2>
              <select
                value={selectedOption}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-500 focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="" disabled>
                  Choose an option
                </option>
                {Object.entries(operatingSystems).map(([os, versions]) => (
                  <optgroup key={os} label={os}>
                    {versions.map((version, index) => (
                      <option key={index} value={version}>
                        {version}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              {warning && (
                <p className="mt-2 text-red-500">Please select an operating system before proceeding.</p>
              )}
              {selectedOption && (
                <p className="mt-4 text-gray-500">You selected: {selectedOption}</p>
              )}
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
              <p>- 4GB RAM</p>
              <p>- 2 vCore</p>
              <p>- Storage 120GB NVMe</p>
              <p>- BandWidth 4TB</p>
              <p>- Intel Premium Processor</p>
              <p>- Active 28 - 30 Day</p>
              <p>- Guarantee 15 Day 1x Replace</p>
            </p>
            <p class="mb-6 text-gray-500 ">
         ⛔Terms of Service⛔
         <p>- Dont Remove Port :9999 in Defender</p>
<p>- Dont Forget to Change Password</p>
<p>- Forget Password = RIP!!</p>
<p>- Dont Use for DDOS</p>
<p>- Dont Use for Mining</p>
<p>- Dont Use For Hacking</p>
<p>- Dont Use for Gaming</p>
<p>- Dont Use for Carding</p>
<p>- Dont Get DDOS</p>
<p>- Dont Get Hacked/Backdoor</p>
<p>- Dont Use for Watch Video</p>
<p>- Dont Cpu 95%</p>
<p>- PANEL CLOUD SUS? = NO REFFUND!!</p>
<p className="text-gray-700">Note: Breaking Terms of Service Rules? = <span className="text-red-500">RIP GUARANTEE!!</span></p>
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
            <p className="mb-2">Product: VPS/RDP 4GB 2vCORE</p>
            <p className="mb-2">Price: RP.25.000</p>
            <p className="mb-4">Selected OS: {selectedOption || "None"}</p>
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

export default Packet14GB;

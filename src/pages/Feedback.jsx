import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiOutlineDocumentDuplicate} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiServer, FiHome, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Feedback = () => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: FiHome },
    { name: "Testimoni", link: "/testimoni", icon: HiOutlineDocumentDuplicate },
    { name: "Products", link: "/products", icon: FiShoppingCart },
    { name: "Growtopia", link: "/growtopia", icon: FiServer },
    { name: "Feedback", link: "/feedback", icon: FiMessageSquare },
   
    { name: "Settings", link: "/error", icon: RiSettings4Line },
  ];

  const [open, setOpen] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // Password untuk menghapus feedback
  const deletePassword = "tanyabapaklu"; // Ganti dengan password Anda

  // Memuat feedback dari localStorage saat halaman pertama kali dibuka
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/feedback");
        const data = await response.json();
        setFeedbacks(data); // Memperbarui state dengan data dari backend
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };
  
    fetchFeedbacks();
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username.trim()) {
      setError("Name is required.");
      return;
    }
  
    const newFeedback = { username, comment };
  
    try {
      const response = await fetch("http://secret-store.web.id/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save feedback");
      }
  
      const savedFeedback = await response.json();
      setFeedbacks([savedFeedback, ...feedbacks]); // Tambahkan feedback baru ke state
      setUsername("");
      setComment("");
      setError(""); // Reset error setelah pengiriman berhasil
      setShowNotification(true);
  
      // Hilangkan notifikasi setelah 3 detik
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error("Error saving feedback:", error.message);
      setError("Failed to save feedback. Please try again.");
    }
  };
  


  
  

  

  // Fungsi untuk menghapus feedback dengan konfirmasi password
  const handleDelete = (id) => {
    const inputPassword = prompt("Enter the password to delete this feedback:");
    if (inputPassword === deletePassword) {
      const updatedFeedbacks = feedbacks.filter((feedback) => feedback.id !== id);
      setFeedbacks(updatedFeedbacks);
    } else {
      alert("Incorrect password. Feedback was not deleted.");
    }
  };

  
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`bg-white/30 ${
          open ? "w-72" : "w-16"
        } duration-500 text-blue-800 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {menus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={`${
                menu.margin && "mt-48"
              } group flex items-center text-lg gap-3.5 font-medium p-2 hover:bg-gray-300 rounded-md`}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-blue-800 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="backdrop-blur-md bg-white/30 w-full">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <img src="/pelr.png" alt="" />
                <span className="p-4 font-bold text-3xl text-blue-800">
                  SECRETSTORE
                </span>
              </div>
</div>
</div>
        </nav>

        {/* Page Content */}
        <main className="p-6  flex-1">
          {/* Add your page content here */}


          <h1 className="text-5xl mt-8 text-blue-800 font-bold">SECRETSTORE's Feedback</h1>
          <p className="text-gray-500 mt-2">Share Your Experience About SECRETSTORE Below!</p>

          <div className="max-w-2xl  mt-2 ">
      {/* Form Feedback */}
      <form
        onSubmit={handleSubmit}
        className=" rounded px-8 py-6"
      >

        {/* Input Nama Pengguna */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              error ? "border-red-500 bg-white/70 focus:ring-red-500" : "border-gray-300 bg-white/70 focus:ring-blue-500"
            }`}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Input Feedback */}
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Feedback
          </label>
          <textarea
            id="comment"
            rows="4"
            placeholder="Enter your feedback"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full bg-white/70 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Tombol Kirim */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
        >
          Submit Feedback
        </button>
            {/* Notifikasi dengan Animasi */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-2 rounded-md mt-4"
            >
              Terima kasih telah feedback di Secret Store!
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      
    {/* Daftar Feedback */}
<div className="w-2/3">
  <h3 className="text-xl font-bold mb-4 text-gray-700">Feedbacks</h3>
  {feedbacks.length === 0 ? (
    <p className="text-gray-500">No feedbacks yet.</p>
  ) : (
    feedbacks.map((feedback) => (
      <div
        key={feedback.id}
        className="flex items-start mb-4 bg-white/70 p-4 rounded-md shadow-sm"
      >
        <img
          src={feedback.profile}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex-grow">
          <div className="flex items-center">
            <h4 className="font-semibold text-gray-800">{feedback.username}</h4>
            {/* Logo Verified */}
            {feedback.username === "iStrange" && (
              <img
                src="./Verified.gif"
                alt="Verified"
                className="ml-1 w-4 h-4"
              />
            )}
          </div>
          <p className="text-gray-600">{feedback.comment}</p>
          <p className="text-sm text-gray-500">
              {feedback.timestamp}
            </p>
        </div>
        <button
          onClick={() => handleDelete(feedback.id)}
          className="ml-4 text-white/10 hover:text-white/60"
        >
          Delete
        </button>
      </div>
    ))
  )}
</div>
</div>
        </main>
      </div>
    </div>
    
  );
};

export default Feedback;










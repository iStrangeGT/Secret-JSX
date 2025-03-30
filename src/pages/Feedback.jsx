import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiOutlineDocumentDuplicate} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiServer, FiHome, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const comments = [
  {
    id: 1,
    profile: "./istrangeprofile.gif",
    banner: "./banner.gif",
    name: "iStrange",
    comment: "you",
    date: "2025-03-30",
    verified: true,
    description: "Owner",
    socialMedia: [
      { platform: "Youtube", link: "" },
      { platform: "Instagram", link: "" },
    ],
  },
];

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
    const [popupData, setPopupData] = useState(null);

  
    const handleCommentClick = (comment) => {
      setPopupData(comment);
    };
    const closePopup = (e) => {
      if (e.target.id === "popup-background") {
        setPopupData(null);
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
      
          <div className="p-4 max-w-xl relative">
      <h1 className="text-2xl font-bold text-gray-700 mt-3 mb-4">Feedbacks:</h1>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-start space-x-4 p-4 bg-white/50 rounded-2xl shadow-md cursor-pointer"
            onClick={() => handleCommentClick(comment)}
          >
            <img
              src={comment.profile}
              alt={`${comment.name} profile`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2
                className="text-lg font-semibold flex items-center space-x-1 text-gray-800 cursor-pointer"
                
              >
                <span>{comment.name}</span>
                {comment.verified && (
                  <img
                    src="Verified.gif"
                    alt="Verified"
                    className="w-4 h-4"
                  />
                )}
              </h2>
              <p className="text-gray-600 text-sm">{comment.comment}</p>
              <p className="text-gray-400 text-xs mt-1">{comment.date}</p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {popupData && (
          <motion.div
            id="popup-background"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={closePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-md w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
                onClick={() => setPopupData(null)}
              >
                &times;
              </button>
              <div className="relative w-full h-24 mb-12">
                <img src={popupData.banner} alt="Banner" className="w-full h-full object-cover rounded-t-2xl" />
                <img
                  src={popupData.profile}
                  alt="Profile"
                  className="w-24 h-24 rounded-full absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 border-4 border-white"
                />
              </div>
              <h2 className="text-2xl font-bold mt-12 text-center flex items-center justify-center space-x-3">
                <span>{popupData.name}</span>
                {popupData.verified && (
                  <img
                    src="Verified.gif"
                    alt="Verified"
                    className="w-6 h-6"
                  />
                )}
              </h2>
              <p className="text-gray-600 text-center text-sm mb-4">{popupData.description}</p>

              {popupData.name === "iStrange" && (
                <form action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" method="POST" className="flex items-center border rounded-md p-2">
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    className="flex-1 p-2 focus:ring-0 focus:outline-none text-sm"
                    rows="2"
                    required
                  ></textarea>
                  <button type="submit" className="text-gray-700 hover:text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 2L11 13"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 2L15 22L11 13L2 9L22 2Z"
                      />
                    </svg>
                  </button>
                </form>
              )}

              <p className="text-base text-gray-600 mt-5 mb-4 text-center">Social Media:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {popupData.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 flex items-center space-x-2"
                  >
                    <img
                      src={`/icons/${social.platform.toLowerCase()}.png`}
                      alt={`${social.platform} icon`}
                      className="w-5 h-5"
                    />
                    <span>{social.platform}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </main>
      </div>
    </div>
    
  );
};

export default Feedback;










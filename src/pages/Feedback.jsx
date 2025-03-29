import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiOutlineDocumentDuplicate} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiServer, FiHome, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const socialIcons = {
  Twitter: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg",
  GitHub: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  LinkedIn: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
};

const comments = [
  {
    id: 1,
    profile: "https://via.placeholder.com/50",
    name: "John Doe",
    comment: "This is a great post!",
    date: "2025-03-28",
    verified: true,
    roles: ["Admin", "Contributor"],
    socialMedia: [
      { platform: "Twitter", link: "https://twitter.com/johndoe" },
      { platform: "GitHub", link: "https://github.com/johndoe" },
    ],
  },
  {
    id: 2,
    profile: "https://via.placeholder.com/50",
    name: "Jane Smith",
    comment: "Thanks for sharing this information.",
    date: "2025-03-29",
    verified: false,
    roles: ["Member"],
    socialMedia: [
      { platform: "LinkedIn", link: "https://linkedin.com/in/janesmith" },
    ],
  },
  {
    id: 3,
    profile: "https://via.placeholder.com/50",
    name: "Michael Brown",
    comment: "I found this very helpful!",
    date: "2025-03-30",
    verified: false,
    roles: ["Subscriber"],
    socialMedia: [],
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

  const handleNameClick = (comment) => {
    setPopupData(comment);
  };

  const closePopup = () => {
    setPopupData(null);
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
          <div className="p-4 max-w-xl mx-auto relative">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-md"
          >
            <img
              src={comment.profile}
              alt={`${comment.name} profile`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2
                className="text-lg font-semibold flex items-center space-x-2 cursor-pointer"
                onClick={() => handleNameClick(comment)}
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

      {popupData && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white rounded-2xl p-4 shadow-md w-80">
            <h2 className="text-xl font-bold mb-2">{popupData.name}</h2>
            <p className="text-sm text-gray-600 mb-2">Roles:</p>
            <ul className="list-disc list-inside mb-2">
              {popupData.roles.map((role, index) => (
                <li key={index} className="text-sm text-gray-800">{role}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mb-2">Social Media:</p>
            <div className="flex flex-wrap gap-2">
              {popupData.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  {social.platform}
                </a>
              ))}
              {popupData.socialMedia.length === 0 && (
                <span className="text-gray-500">No social media links available.</span>
              )}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
        </main>
      </div>
    </div>
    
  );
};

export default Feedback;










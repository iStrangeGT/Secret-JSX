import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineDocumentDuplicate} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiServer, FiHome, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Products = () => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: FiHome },
    { name: "Testimoni", link: "/testimoni", icon: HiOutlineDocumentDuplicate },
    { name: "Products", link: "/products", icon: FiShoppingCart },
    { name: "Growtopia", link: "/growtopia", icon: FiServer },
    { name: "Feedback", link: "/error", icon: FiMessageSquare },
   
    { name: "Setting", link: "/error", icon: RiSettings4Line, margin: true },
    { name: "Account", link: "/error", icon: AiOutlineUser },
  ];
  
    const [open, setOpen] = useState(true);
  
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
        <nav className="backdrop-blur-md bg-white/40 w-full">
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
          <h1 className="text-5xl mt-8 text-blue-800 font-bold">SECRETSTORE's Products Section.</h1>
 
      <p className="text-gray-500 mt-5"> Hi Customers!, We are here to provide a variety of server needs, such as game servers or web servers. We provide VPS, RDP, Growtopia Private Server Source, Coding Service, and more.</p>


<div class="relative flex min-h-screen flex-col mt-5">
<h2 className="text-2xl mt-3 mb-3 text-blue-800 flex font-bold">[DigitalOcean] <span className="mx-2 text-gray-700">VPS/RDP Packet 1</span></h2>
  <div class="carousel scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
    <div class="relative inset-0 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/70 border border-gray-200 rounded-lg shadow-sm">
  <img
    className="p-8 rounded-t-lg"
    src="./DigitalOcean.png"
    alt="DigitalOcean VPS product"
  />
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-500">
        <span className="text-blue-400">[DigitalOcean]</span> VPS/RDP 4GB 2vCORE{" "}
        <span className="text-red-600">[Out of Stock]</span>
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1">
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {[...Array(2)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
        3.0
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-500">RP.25.000</span>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Buy Now
      </button>
    </div>
  </div>
</div>
      </div>
    </div>

    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
    <div class="relative inset-0 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/70 border border-gray-200 rounded-lg shadow-sm">
  <img
    className="p-8 rounded-t-lg"
    src="./DigitalOcean.png"
    alt="DigitalOcean VPS product"
  />
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-500">
        <span className="text-blue-400">[DigitalOcean]</span> VPS/RDP 4GB 2vCORE{" "}
        <span className="text-red-600">[Out of Stock]</span>
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1">
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {[...Array(2)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
        3.0
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-500">RP.25.000</span>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Buy Now
      </button>
    </div>
  </div>
</div>
      </div>
    </div>
    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
    <div class="relative inset-0 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/70 border border-gray-200 rounded-lg shadow-sm">
  <img
    className="p-8 rounded-t-lg"
    src="./DigitalOcean.png"
    alt="DigitalOcean VPS product"
  />
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-500">
        <span className="text-blue-400">[DigitalOcean]</span> VPS/RDP 4GB 2vCORE{" "}
        <span className="text-red-600">[Out of Stock]</span>
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1">
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {[...Array(2)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
        3.0
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-500">RP.25.000</span>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Buy Now
      </button>
    </div>
  </div>
</div>
      </div>
    </div>


  </div>
  <h2 className="text-2xl mt-5 mb-3 text-blue-800 flex font-bold">[DigitalOcean] <span className="mx-2 text-gray-700">VPS/RDP Packet 2</span></h2>
  <div class="carousel scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
  <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
  <div class="inset-0 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/70 border border-gray-200 rounded-lg shadow-sm">
  <img
    className="p-8 rounded-t-lg"
    src="./DigitalOcean.png"
    alt="DigitalOcean VPS product"
  />
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-500">
        <span className="text-blue-400">[DigitalOcean]</span> VPS/RDP 4GB 2vCORE{" "}
        <span className="text-red-600">[Out of Stock]</span>
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1">
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {[...Array(2)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
        3.0
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-500">RP.25.000</span>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Buy Now
      </button>
    </div>
  </div>
</div>
      </div>
    </div>

    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
    <div class="inset-0 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/70 border border-gray-200 rounded-lg shadow-sm">
  <img
    className="p-8 rounded-t-lg"
    src="./DigitalOcean.png"
    alt="DigitalOcean VPS product"
  />
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-500">
        <span className="text-blue-400">[DigitalOcean]</span> VPS/RDP 4GB 2vCORE{" "}
        <span className="text-red-600">[Out of Stock]</span>
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1">
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {[...Array(2)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
        3.0
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-500">RP.25.000</span>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Buy Now
      </button>
    </div>
  </div>
</div>
      </div>
    </div>

</div>
<h2 className="text-2xl mt-5 mb-3 text-red-700 flex font-bold">[IndonesiaRegion] <span className="mx-2 text-gray-700">VPS/RDP</span></h2>
  <div class="carousel scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
  <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
      <div class="inset-0 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/70 border border-gray-200 rounded-lg shadow-sm">
  <img
    className="p-8 rounded-t-lg"
    src="./DigitalOcean.png"
    alt="DigitalOcean VPS product"
  />
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-500">
        <span className="text-blue-400">[DigitalOcean]</span> VPS/RDP 4GB 2vCORE{" "}
        <span className="text-red-600">[Out of Stock]</span>
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1">
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {[...Array(2)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
        3.0
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-500">RP.25.000</span>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Buy Now
      </button>
    </div>
  </div>
</div>

      </div>
    </div>

    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
    <div class="inset-0 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/70 border border-gray-200 rounded-lg shadow-sm">
  <img
    className="p-8 rounded-t-lg"
    src="./DigitalOcean.png"
    alt="DigitalOcean VPS product"
  />
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-500">
        <span className="text-blue-400">[DigitalOcean]</span> VPS/RDP 4GB 2vCORE{" "}
        <span className="text-red-600">[Out of Stock]</span>
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1">
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {[...Array(2)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
        3.0
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-500">RP.25.000</span>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Buy Now
      </button>
    </div>
  </div>
</div>
      </div>
    </div>

    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
    <div class="inset-0 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/70 border border-gray-200 rounded-lg shadow-sm">
  <img
    className="p-8 rounded-t-lg"
    src="./DigitalOcean.png"
    alt="DigitalOcean VPS product"
  />
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-500">
        <span className="text-blue-400">[DigitalOcean]</span> VPS/RDP 4GB 2vCORE{" "}
        <span className="text-red-600">[Out of Stock]</span>
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1">
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {[...Array(2)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
        3.0
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-500">RP.25.000</span>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Buy Now
      </button>
    </div>
  </div>
</div>
      </div>
    </div>
    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
    <div class="inset-0 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/70 border border-gray-200 rounded-lg shadow-sm">
  <img
    className="p-8 rounded-t-lg"
    src="./DigitalOcean.png"
    alt="DigitalOcean VPS product"
  />
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-500">
        <span className="text-blue-400">[DigitalOcean]</span> VPS/RDP 4GB 2vCORE{" "}
        <span className="text-red-600">[Out of Stock]</span>
      </h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1">
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {[...Array(2)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
        3.0
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-500">RP.25.000</span>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Buy Now
      </button>
    </div>
  </div>
</div>
      </div>
    </div>

</div>

  
  
  </div>
  
  






        </main>
      </div>
    </div>
  );
};

export default Products;

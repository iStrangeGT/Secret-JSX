import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineDocumentDuplicate} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiServer, FiHome, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Testimoni= () => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: FiHome },
    { name: "Testimoni", link: "/testimoni", icon: HiOutlineDocumentDuplicate },
    { name: "Products", link: "/products", icon: FiShoppingCart },
    { name: "Growtopia", link: "/growtopia", icon: FiServer },
    { name: "Feedback", link: "/feedback", icon: FiMessageSquare },
   
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


          <h1 className="text-5xl mt-8 text-blue-800 font-bold">SECRETSTORE's Testimonials</h1>
          <p className="text-gray-500 mt-2">I only show a few testimonials, if you want to see more testimonials, please join one of the platforms below.
          </p>
          <p className="text-gray-500 text-xl mt-3">Testimonials Count: <span className="text-blue-800">49</span>
          </p>
          <div class="relative flex min-h-screen flex-col mt-5">
  <div class="carousel flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
      <div class="absolute inset-0 flex items-center justify-center">
      <img className="p-0 rounded-lg" src="./testi17.jpg" alt="testi" />
      </div>
    </div>

    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
      <div class="absolute inset-0 flex items-center justify-center">
      <img className="p-0 rounded-lg" src="./testi18.jpg" alt="testi" />
      </div>
    </div>
    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
      <div class="absolute inset-0 flex items-center justify-center">
      <img className="p-0 rounded-lg" src="./testi19.jpg" alt="testi" />
      
      </div>
    </div>
    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
      <div class="absolute inset-0 flex items-center justify-center">
      <img className="p-0 rounded-lg" src="./testi21.jpg" alt="testi" />
      </div>
    </div>
    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
      <div class="absolute inset-0 flex items-center justify-center">
      <img className="p-0 rounded-lg" src="./testi22.jpg" alt="testi" />
      </div>
    </div>
    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
      <div class="absolute inset-0 flex items-center justify-center">
      <img className="p-0 rounded-lg" src="./testi23.jpg" alt="testi" />
      </div>
    </div>
    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
      <div class="absolute inset-0 flex items-center justify-center">
      <img className="p-0 rounded-lg" src="./testi24.jpg" alt="testi" />
      </div>
    </div>
    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
      <div class="absolute inset-0 flex items-center justify-center">
      <img className="p-0 rounded-lg" src="./testi26.jpg" alt="testi" />
      </div>
    </div>
    <div class="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-white/70 md:w-[calc(33.33%-(32px/3))]">
      <div class="absolute inset-0 flex items-center justify-center">
      <img className="p-0 rounded-lg" src="./testi27.jpg" alt="testi" />
      </div>
    </div>
    </div>
    <div>
    <h3 className="text-3xl mt-5 text-gray-500 font-bold">SECRETSTORE's Platforms</h3>
<button
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  class="mb-2 inline-block rounded bg-[#7289da] px-6 py-2.5 m-1 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span class="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 640 512">
      
      <path
        d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
    </svg>
  </span>
</button>
<button
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  class="mb-2 inline-block rounded bg-[#128c7e] px-6 py-2.5 m-1 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span class="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 448 512">
    
      <path
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  </span>
</button>
    </div>
    </div>


   


        </main>
      </div>
    </div>
    
  );
};

export default Testimoni;

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "User", link: "/", icon: AiOutlineUser },
    { name: "Messages", link: "/", icon: FiMessageSquare },
    { name: "Analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Product", link: "/product", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];

  const [open, setOpen] = useState(true);

  return (
    <div className="flex sm:h-full h-full">
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
                menu.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-300 rounded-md`}
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
                <span className="p-4 font-bold text-xl text-blue-800">
                  SECRETSTORE
                </span>
              </div>
</div>
</div>
        </nav>

        {/* Page Content */}
        <main className="p-6  flex-1">
          {/* Add your page content here */}
          <h1 className="text-xl mt-10 text-blue-800 font-bold">Welcome to SECRETSTORE</h1>
          <p className="text-gray-500 mt-5"> Hi Customers!, We are here to provide a variety of server needs, such as game servers or web servers. We provide VPS, RDP, Growtopia Private Server Source, Coding Service, and more.</p>
          <div class="relative flex flex-col my-6 bg-white/40 shadow-sm border border-slate-200 rounded-lg w-96">
  <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
  </div>
  <div class="p-4">
    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
      Website Review Check
    </h6>
    <p class="text-slate-600 leading-normal font-light">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to &quot;Naviglio&quot; where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div class="px-4 pb-4 pt-0 mt-2">
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div>  
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

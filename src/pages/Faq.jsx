import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiOutlineDocumentDuplicate, HiOutlineChatAlt2} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiServer, FiHome, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SiGamejolt } from "react-icons/si";
import { BsChatLeftQuote } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { TfiShoppingCartFull, TfiHome } from "react-icons/tfi";
import { AiOutlineFileDone } from "react-icons/ai";
const Faq = () => {
  const menus = [
    { name: "Home", link: "/home", icon: TfiHome },
   { name: "Testimoni", link: "/testimoni", icon: AiOutlineFileDone },
    { name: "Products", link: "/products", icon: TfiShoppingCartFull },
    { name: "Growtopia", link: "/growtopia", icon: SiGamejolt },
   { name: "Feedback", link: "/feedback", icon: IoChatboxEllipsesOutline },
   
    { name: "FAQ", link: "/faq", icon: BsChatLeftQuote },
  ];

  
  const [open, setOpen] = useState(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    return savedState === "true"; // Konversi string ke boolean
  });

  // Simpan status sidebar ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("sidebarOpen", open);
  }, [open]);

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
          <section>
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-blue-800 ">SECRETSTORE's Frequently asked questions (FAQ)</h2>
      <div class="grid pt-8 text-left border-t border-gray-400 md:gap-16 md:grid-cols-2">
          <div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-blue-500 ">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What is VPS/RDP?
                  </h3>
                  <p class="text-gray-500 ">VPS (Virtual Private Server) and RDP (Remote Desktop Protocol) are technologies that allow users to access and control servers remotely. VPS is a virtual server, while RDP is a protocol that allows users to access remote computers.</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-blue-500 ">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What is function of VPS/RDP?
                  </h3>
                  <p class="text-gray-500 ">A Virtual Private Server (VPS) hosts websites, applications, and databases, while Remote Desktop Protocol (RDP) lets users remotely access a Windows-based computer.</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-blue-500 ">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      How long VPS/RDP active?
                  </h3>
                  <p class="text-gray-500 ">VPS/RDP will be active for 28-30 days depending on usage and may not be up to 28-30 days if it is an illegal VPS/not in the Indonesian region. For the Indonesian region, it will definitely be active for 30 days and can be extended and will not be suspended suddenly, but the price is a bit expensive because of its quality.</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-blue-500 ">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What OS did you provide in SECRETSTORE?
                  </h3>
                  <p class="text-gray-500 ">we provide many choices of operating systems, ranging from windows, linux, ubuntu, centOS, debian, and fedora. you are free to choose it according to your needs.</p>
              </div>
          </div>
          <div>
          <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-blue-500 ">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      is GTPS Hosting safe from hacking?
                  </h3>
                  <p class="text-gray-500 ">Yes, it is very safe, at an affordable price you can experience premium features that cannot be found on any other source.</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-blue-500 ">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      do i need coding skills for buy GTPS HOSTING?
                  </h3>
                  <p class="text-gray-500 ">no, you don't need to have coding skills to buy our hosting, we will manage your server and you just have to give commands. and we will provide a dashboard so you can configure the server easily and quickly.</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-blue-500 ">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Can GTPS HOSTING be extended?
                  </h3>
                  <p class="text-gray-500 ">Of course, you can renew it every month at the same price as you paid before.</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-blue-500 ">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      is the coding service at SECRETSTORE very fast and safe?
                  </h3>
                  <p class="text-gray-500 ">Yes, I or the owner of SECRETSTORE master the programming languages ​​C++, C#, JavaScript, HTML, CSS.</p>
              </div>
          </div>
      </div>
  </div>
</section>
        </main>
      </div>
    </div>
    
  );
};

export default Faq;

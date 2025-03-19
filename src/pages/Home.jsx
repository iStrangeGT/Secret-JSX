import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
    return (
      <>
     <nav className="w-full backdrop-blur-md  bg-white/30  shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/pelr.png" alt="" />
        <span className="p-4 font-bold text-xl text-blue-800">SECRETSTORE
        </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
          
            <Link to="/hosting" className="text-gray-600 text-xs hover:text-purple-600 transition duration-300">
            Hosting
              </Link>
              <Link to="/product" className="text-gray-600 text-xs  hover:text-purple-600 transition duration-300">
                Product
              </Link>
              <Link to="/gtps-source" className="text-gray-600 text-xs hover:text-purple-600 transition duration-300">
                Growtopia
              </Link>
              <button className="px-4 py-2 rounded-full bg-blue-800 text-xs text-white hover:opacity-90 transition duration-300">
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-blue-800">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

<div className="mt-10 text-center">
<h1 className="text-2xl font-bold text-blue-800">
  Welcome to SecretStore!
</h1>
</div>
<div className="mt-4 flex justify-center">
  <div className="text-center max-w-2xl">
    <p className="text-gray-600 mt-2">
      Hi Customers! We are here to provide a variety of server needs, such as game servers or web servers. We provide VPS, RDP, Growtopia Private Server Source, Coding Service, and more.
    </p>
  </div>
</div>
</>
    )
}

export default Home;
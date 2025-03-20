import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
    return (
      <>


     <nav className="fixed top-0 left-0 w-full backdrop-blur-md  bg-white/30  shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/pelr.png" alt="" />
        <span className="p-4 font-extrabold text-3xl text-blue-800">SECRETSTORE
        </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
          
            <Link to="/hosting" className="text-gray-600 text-sm hover:text-purple-600 transition duration-300">
            Hosting
              </Link>
              <Link to="/product" className="text-gray-600 text-sm  hover:text-purple-600 transition duration-300">
                Product
              </Link>
              <Link to="/gtps-source" className="text-gray-600 text-sm hover:text-purple-600 transition duration-300">
                Growtopia
              </Link>
              <button className="px-4 py-2 rounded-full bg-blue-800 text-sm text-white hover:opacity-90 transition duration-300">
  <Link to="/dashboard">Get Started</Link>
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
 
<div className=" mt-48 text-center">
<h1 className="text-6xl font-extrabold text-blue-800">
  Welcome to SECRETSTORE!
</h1>
</div>
<div className="mt-2 flex justify-center">
  <div className="text-center max-w-2xl px-4">
    <p className="text-gray-600 text-2xl mt-10">
      Hi Customers! We are here to provide a variety of server needs, such as game servers or web servers. We provide VPS, RDP, Growtopia Private Server Source, Coding Service, and more.
    </p>
  </div>

</div>
<div className="flex justify-center items-center my-28 mt-14">
  <button className="px-12 py-2 rounded-full bg-blue-800 text-lg text-white hover:opacity-90 transition duration-300">
  <Link to="/dashboard">Get Started</Link>
  </button>
</div>



<section>
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
  <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-3xl tracking-tight font-bold text-blue-800 ">Select Your GTPS Plans</h2>
          <p className="text-gray-500 text-lg">Select Your Plan And Become an Owner Of Growtopia Private Server, With No Coding Experience Now You Still Can Be Owner of a Growtopia Private Server. Just Select And Buy The Plans!
          </p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center  text-white  bg-blue-800 rounded-lg border border-blue-200 shadow">
              <h3 class="mb-4 text-4xl font-semibold">Basic</h3>
              <p class="font-light px-3 text-cyan-500 sm:text-lg ">Recomended For You If You Have Low Budget.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-4xl  text-white font-extrabold">RP.300.000</span>
                  <span class="text-cyan-500 ">/month</span>
              </div>
              <ul role="list" class="mb-8  text-cyan-500 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Vps 9GB 5 Core</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Up To 200 - 300 Players</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5  text-red-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span>Premium GTPS CPP</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5  text-red-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span>Strong AntiDDOS</span>

                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5  text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free Coder Until Subscriptions Over</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5  text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free Update Until Subscriptions Over</span>
                  </li>
              </ul>
              <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-semibold rounded-lg text-lg px-5 py-2.5 mt-16 text-center">BUY PLAN</a>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center  text-blue-800  bg-white/50 rounded-lg border border-gray-100 shadow">
              <h3 class="mb-4 text-4xl  font-semibold">Better</h3>
              <p class="font-light px-3 text-gray-500 sm:text-lg :text-gray-400">Recommended For You If Have Mid Budget.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-4xl  text-blue-800 font-extrabold">RP.600.000</span>
                  <span class="text-gray-500">/month</span>
              </div>
              <ul role="list" class="mb-8  text-gray-500 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Vps 17GB 7 Core</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Up To 400 - 600 Players</span>
                  </li>
                  <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium GTPS CPP</span>
                  </li>
                  <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Strong AntiDDOS</span>

                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5  text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free Coder Until Subscriptions Over</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5  text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free Update Until Subscriptions Over</span>
                  </li>
              </ul>
              <a href="#" class="text-blue-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-semibold rounded-lg text-lg px-5 py-2.5 mt-16 text-center">BUY PLAN</a>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-blue-800 bg-white/50 rounded-lg border border-gray-100 shadow">
              <h3 class="mb-4 text-4xl font-semibold">Best</h3>
              <p class="font-light px-3 text-gray-500 sm:text-lg">Recommended For You If You Are Rich or Have High Budget.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-blue-800 text-4xl font-extrabold">RP.800.000</span>
                  <span class="text-gray-500">/month</span>
              </div>
              <ul role="list" class="mb-8  text-gray-500 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Vps 31GB 9 Core</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Up To 600 - 1000+ Players</span>
                  </li>
                  <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium GTPS CPP</span>
                  </li>
                  <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-5 h-5 text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Strong AntiDDOS</span>

                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5  text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free Coder Until Subscriptions Over</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5  text-green-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free Update Until Subscriptions Over</span>
                  </li>
              </ul>
              <a href="#" class="text-blue-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-semibold rounded-lg text-lg px-5 py-2.5 mt-16 text-center">BUY PLAN</a>
          </div>
      </div>
  </div>
</section>
</>
    )
}

export default Home;
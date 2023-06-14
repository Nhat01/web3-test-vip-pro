"use client"
import { BellIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import Search from "./Search";
import { useState } from "react";
import Balance from "../blance/Balance";
import { ethers } from "ethers";
import { ThirdwebProvider, ConnectWallet, metamaskWallet } from "@thirdweb-dev/react";
import Sidebar from "../sidebar/Sidebar";

const Nav = () => {

   const [isOpen, setOpen] = useState(false);
   const [isOpenSideBar, setOpenSideBar] = useState(false);

   function openMenu() {
      setOpen(!isOpen);
   }

   return (
      <div>
         <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-2">
               <Logo />
               <div className="md:block hidden flex-1 relative">
                  <Search />
               </div>
               <button className="rounded-full bg-white md:block hidden">
                  <BellIcon className="w-7 h-7 text-gray-600" />
               </button>
               <div onMouseEnter={() => setOpenSideBar(true)}>
                  <ConnectWallet theme="light" />
                  <div className={` ${isOpenSideBar ? "block" : "hidden"} mt-0`} onMouseLeave={() => setOpenSideBar(false)}>
                     <Sidebar />
                  </div>
               </div>
               <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false" onClick={openMenu}>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
               </button>
            </div>
            <div className={`w-full ${isOpen ? "block" : "hidden"} p-5 bg-white`} id="navbar-hamburger">
               <ul className="flex flex-col gap-5 font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <Search />
                  <Balance />
                  <li>
                     <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
                  </li>
                  <li>
                     <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                  </li>
                  <li>
                     <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                  </li>
                  <li>
                     <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                  </li>
               </ul>
            </div>
         </nav>

      </div>
   );
};

export default Nav;

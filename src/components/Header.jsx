import React from "react";
import { Search, Bell, Plus, Menu } from "lucide-react"; // Example icons

const Header = () => {
  // Mock data for notification badge
  const notificationCount = 3;

  return (
      <header className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* 1. Stack Logo (Left) */}
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold tracking-widest cursor-pointer">
              <span className="text-gray-300">S</span>tack
            </div>

            {/* Trending/Category Chips (Below the header in the image, but often part of nav) */}
          </div>

          <div className=" space-x-4 text-sm text-gray-400 mt-2 mx-4">
            <span className="cursor-pointer  hover:text-white hover:border-b-2">
              Trending
            </span>
            <span className="cursor-pointer  hover:text-white hover:border-b-2">
              Latest
            </span>
            <span className="cursor-pointer  hover:text-white hover:border-b-2">
              AI/ML
            </span>
            <span className="cursor-pointer  hover:text-white hover:border-b-2">
              Productivity
            </span>
            <span className="cursor-pointer  hover:text-white hover:border-b-2">
              Design Systems
            </span>
            <span className="cursor-pointer  hover:text-white hover:border-b-2">
              Web3
            </span>
          </div>

          {/* 2. Search Bar (Center) */}
          <div className="flex-grow max-w-lg hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search for knowledge"
                className="w-full py-2 pl-10 pr-4 bg-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 border-none"
              />
            </div>
          </div>

          {/* 3. User Actions (Right) */}
          <div className="flex items-center space-x-4">
            {/* New Stack Button */}

            {/* Notifications Icon */}
            <div className="relative p-2 cursor-pointer hover:bg-gray-500 rounded-full transition-colors">
              <Bell className="h-6 w-6 text-gray-300 hover:text-white" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full border-2 border-[#111]"></span>
              )}
            </div>
            <button className="flex items-center bg-white text-[#111] font-semibold py-2 px-3 rounded-md hover:bg-gray-200 transition-colors whitespace-nowrap">
              <Plus className="h-5 w-5 mr-1" />
              New Stack
            </button>

            {/* Profile Avatar/Menu (Placeholder) */}
            <div className="h-8 w-8 bg-gray-600 rounded-full cursor-pointer hover:ring-2 ring-white/50 transition-shadow">
              {/* 

[Image of User Avatar]
 */}
            </div>

            {/* Mobile Menu Icon (if needed) */}
            <div className="md:hidden p-2 cursor-pointer hover:bg-gray-800 rounded-full transition-colors">
              <Menu className="h-6 w-6 text-gray-300 hover:text-white" />
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8" />
        <h1 className="text-xl ml-2 text-gray-800 font-semibold">Food Menu App</h1>
      </div>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search..." 
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="bg-orange-500 p-2 rounded-r-md text-white">
          <FaSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;

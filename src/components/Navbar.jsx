import React from "react";
import download from "./download.png";
function Navbar() {
  return (
    <div className="  flex items-center space-x-9 px-12 py-2 font-poppins sticky top-0 bg-slate-900 bg-opacity-80 z-90">
      <img className="w-[50px]" src={download} alt="logo" />

      <h2 className="text-2xl font-semibold text-blue-400 ">Movies</h2>

      <h2 className="text-2xl font-semibold text-blue-400 "> Favourites</h2>
    </div>
  );
}

export default Navbar;

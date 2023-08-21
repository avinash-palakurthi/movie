import React from "react";
// import image from "./image.jpg";
// import k from "./k.jpeg";
import "./banner.css";
function Banner() {
  return (
    <div>
      <div className="bg-banner h-[60vh] bg-center bg-cover flex items-end">
        <div className="text-white text-2xl font-poppins font-extralight bg-slate-900 bg-opacity-80 text-center p-2.5 w-full">
          Project-K
        </div>
      </div>
    </div>
  );
}

export default Banner;

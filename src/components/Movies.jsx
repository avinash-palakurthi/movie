import React from "react";
import image1 from "./image1.jpg";
function Movies() {
  return (
    <div className="">
      <h3 className="text-3xl font-medium  text-center mb-5 ">
        Trending Movies
      </h3>
      <div className="flex justify-center flex-wrap ">
        <img
          src={image1}
          alt="img"
          className="h-[350px] m-3 rounded-xl hover:scale-110 duration-300"
        />
        <img
          src={image1}
          alt="img"
          className="h-[350px] m-3 rounded-xl hover:scale-110 duration-300"
        />
        <img
          src={image1}
          alt="img"
          className="h-[350px] m-3 rounded-xl hover:scale-110 duration-300"
        />
        <img
          src={image1}
          alt="img"
          className="h-[350px] m-3 rounded-xl hover:scale-110 duration-300"
        />
        <img
          src={image1}
          alt="img"
          className="h-[350px] m-3 rounded-xl hover:scale-110 duration-300"
        />
        <img
          src={image1}
          alt="img"
          className="h-[350px] m-3 rounded-xl hover:scale-110 duration-300"
        />
      </div>
    </div>
  );
}

export default Movies;

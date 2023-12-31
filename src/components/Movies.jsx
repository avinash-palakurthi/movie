import React from "react";
// import image from "./image.jpg";
function Movies() {
  return (
    <div className="">
      <h3 className="text-3xl font-medium  text-center mb-5 ">
        Trending Movies
      </h3>
      <div className="flex justify-center flex-wrap ">
        <div
          className="bg-[url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtKkb9ONX6E3pnaahkYRrdZsYo_1fH5UesZ5DxfC-QG1o7R1Ia)] h-[30vh]  md:h-[45vh]
                md:w-[200px]  w-[160px] m-3 rounded-xl hover:scale-110  bg-center bg-cover duration-300 flex items-end "
        >
          <div className="text-white bg-slate-800  w-full text-center bg-opacity-70 text-xl font-poppins font-light p-3 rounded-b-xl">
            Southpaw
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;

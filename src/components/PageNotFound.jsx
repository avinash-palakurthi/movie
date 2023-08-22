import React from "react";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-slate-900  text-white">
      <h1 className="text-9xl font-thin font-poppins">Oops...!!!</h1>
      <h2 className="capitalize text-4xl font-thin">
        some thing went wrong...
      </h2>
      <h2 className="capitalize text-3xl py-2 font-thin">Page NotFound</h2>
    </div>
  );
}

export default PageNotFound;

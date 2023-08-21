import React from "react";

function Pagination() {
  return (
    <div className="flex mt-6 justify-center text-xl font-semibold my-8 ">
      <div className="border-2 border-blue-400 p-2 border-r-0 rounded-l-xl">
        Previous
      </div>
      <div className="border-2 border-blue-400 p-2 border-r-0 bg-blue-500">
        1
      </div>
      <div className="border-2 border-blue-400 p-2 rounded-r-xl">Next</div>
    </div>
  );
}

export default Pagination;

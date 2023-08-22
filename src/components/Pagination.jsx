import React, { useState } from "react";

function Pagination() {
  let [pageChange, setPageChange] = useState(1);

  const handlerPreviousPage = () => {
    console.log("previousPage");
    if (pageChange > 1) {
      setPageChange(pageChange - 1);
    }
  };

  const handlerNextPage = () => {
    console.log("nextPage");

    setPageChange(pageChange + 1);
  };
  return (
    <div className="flex mt-6 justify-center text-xl font-semibold my-8 ">
      <div
        className="border-2 border-blue-400 p-2 border-r-0 rounded-l-xl"
        onClick={handlerPreviousPage}
      >
        Previous
      </div>
      <div className="border-2 border-blue-400 p-2 border-r-0 bg-blue-500">
        {pageChange}
      </div>
      <div
        className="border-2 border-blue-400 p-2 rounded-r-xl"
        onClick={handlerNextPage}
      >
        Next
      </div>
    </div>
  );
}

export default Pagination;

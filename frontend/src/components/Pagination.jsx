import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  console.log(totalPages);
  if (totalPages <= 1) return null;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="my-6 flex justify-end items-center">
      <div className="flex items-center gap-2">
        {/* Left button */}
        <button
          className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200
            ${
              currentPage === 1
                ? "bg-gray-100 text-gray-500 border border-gray-300 cursor-not-allowed"
                : "bg-white border border-gray-700"
            }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MdOutlineKeyboardArrowLeft size={20} />
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        {/* Right button */}
        <button
          className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 
            ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-500 border border-gray-300 cursor-not-allowed"
                : "bg-white border border-gray-700"
            }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <MdOutlineKeyboardArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

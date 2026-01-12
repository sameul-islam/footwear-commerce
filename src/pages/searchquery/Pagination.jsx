import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Pagination = ({ totalProducts, productsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const pageNumbers = [];
  const maxVisiblePages = 2;

  // Logic for visible page numbers with dots
  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8 mb-10">
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="disabled:opacity-10"
      >
        <MdArrowBackIosNew size={20} className=" cursor-pointer text-gray-800"/>
      </button>

      {startPage > 1 && <span className="px-2">...</span>}

      {pageNumbers.map(num => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          className={`font-Outfit px-2 ${num === currentPage ? "text-gray-800" : "text-gray-400 cursor-pointer"}`}
        >
          {num}
        </button>
      ))}

      {endPage < totalPages && <span className="px-2">...</span>}

      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="disabled:opacity-10"
      >
        <MdArrowForwardIos size={20} className=" cursor-pointer text-gray-800"/>
      </button>
    </div>
  );
};

export default Pagination;

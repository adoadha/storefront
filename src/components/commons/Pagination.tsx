import React from "react";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface PaginationProps {
  className?: string;
  onPageSizeChange: (pageSize: number) => void;
  onPageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

const PaginationCustom: React.FunctionComponent<PaginationProps> = ({
  onPageSizeChange,
  onPageChange,
  currentPage,
  totalPages,
}) => {
  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPageSize = parseInt(event.target.value, 10);
    onPageSizeChange(selectedPageSize);
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Jumlah maksimal halaman yang ditampilkan
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

    // Logika untuk menampilkan nomor halaman dengan tanda "..."
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      if (currentPage <= halfMaxVisiblePages) {
        for (let i = 1; i <= maxVisiblePages - 1; i++) {
          pages.push(renderPageButton(i));
        }
        pages.push(<span key="ellipsis">...</span>);
        pages.push(renderPageButton(totalPages));
      } else if (currentPage > totalPages - halfMaxVisiblePages) {
        pages.push(renderPageButton(1));
        pages.push(<span key="ellipsis">...</span>);
        for (let i = totalPages - (maxVisiblePages - 2); i <= totalPages; i++) {
          pages.push(renderPageButton(i));
        }
      } else {
        pages.push(renderPageButton(1));
        pages.push(<span key="ellipsis-start">...</span>);
        for (
          let i = currentPage - halfMaxVisiblePages + 1;
          i <= currentPage + halfMaxVisiblePages - 1;
          i++
        ) {
          pages.push(renderPageButton(i));
        }
        pages.push(<span key="ellipsis-end">...</span>);
        pages.push(renderPageButton(totalPages));
      }
    }

    return pages;
  };

  const renderPageButton = (pageNumber: number) => (
    <button
      key={pageNumber}
      onClick={() => handlePageClick(pageNumber)}
      className={`mx-1 rounded px-4 py-2 ${
        currentPage === pageNumber
          ? "bg-gray-200 font-medium text-gray-900"
          : "hover:bg-gray-100"
      }`}
    >
      {pageNumber}
    </button>
  );

  return (
    <div className="flex flex-col justify-between lg:flex-row">
      <div className="flex flex-col items-center space-x-2 text-xs lg:flex-row">
        <select
          onChange={handlePageSizeChange}
          className="block w-[100px] appearance-none rounded-sm border border-gray-300 p-2 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          defaultValue="25"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
      </div>
      <nav
        aria-label="Pagination"
        className="flex items-center justify-center mt-8 text-gray-600 lg:mt-0"
      >
        <Button
          variant="outline"
          className="p-2 mr-4 rounded"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>

        {renderPageNumbers()}

        <Button
          variant="outline"
          className="p-2 ml-4 rounded"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </nav>
    </div>
  );
};

export default PaginationCustom;

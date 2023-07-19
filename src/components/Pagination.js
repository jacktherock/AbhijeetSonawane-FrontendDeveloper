import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, handlePageChange }) => {

    return (
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={"flex items-center justify-center mt-6"}
            previousLinkClassName={"px-4 py-2 rounded-l-lg border border-gray-400 bg-white text-gray-600 hover:bg-gray-100"}
            nextLinkClassName={"px-4 py-2 rounded-r-lg border border-gray-400 bg-white text-gray-600 hover:bg-gray-100"}
            pageLinkClassName={"px-4 py-2 border border-gray-400 bg-white text-gray-600 hover:bg-gray-100"}
            activeLinkClassName={"px-4 py-2 border border-gray-400 font-bold text-blue-600 bg-blue-100"}
            breakLinkClassName={"px-4 py-2 border border-gray-400 bg-white text-gray-600 hover:bg-gray-100"}
            disabledClassName={"hidden"}
        />
    );
};

export default Pagination;

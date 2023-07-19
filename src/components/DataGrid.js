import React, { useState } from 'react';
import { useGlobalContext } from '../context/Context';
import SearchForm from './SearchForm';
import Pagination from './Pagination';
import Popup from './Popup';
import spinner from '../assets/spinner.gif';

const DataGrid = () => {
    const { hits, loading, error } = useGlobalContext();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredHits, setFilteredHits] = useState(hits);
    const [popupData, setPopupData] = useState(null);

    const itemsPerPage = 10;
    const pageCount = Math.ceil(filteredHits.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    // console.log(hits);

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredData = hits.filter(item => {
            const { status, original_launch, type } = item;
            return (
                status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                original_launch?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                type?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        setFilteredHits(filteredData);
        setCurrentPage(0);
    };

    const handleReset = () => {
        setFilteredHits(hits);
        setSearchTerm('');
        setCurrentPage(0);
    };

    const openPopup = (data) => {
        setPopupData(data);
    };

    const closePopup = () => {
        setPopupData(null);
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };


    if (error) return (<h2 className='text-danger'>Error: {error.message}</h2>);

    return (
        <div className="container mx-auto px-8 py-8">

            {/* Search form */}
            <SearchForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                handleReset={handleReset}
            />

            {/* Data */}
            {loading ?
                <div className="p-5 flex items-center justify-center">
                    <img src={spinner} alt="loading" />
                </div>
                : filteredHits.length === 0 ? (
                    <div className="p-5 flex items-center justify-center">
                        <div className="grid-item bg-red-500 shadow-2xl rounded-lg p-6 mb-6 w-96 hover:shadow-xl transition duration-300">
                            <p className="text-center text-white text-xl font-bold uppercase">No matching data found.</p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Pagination */}
                        <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />

                        {/* Data Grid */}
                        <div className="grid-container grid grid-cols-2 gap-16 pt-20 px-8 pb-10">
                            {filteredHits.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item) => {
                                const { capsule_serial, status, details } = item;
                                return (
                                    <div key={capsule_serial ? capsule_serial : "Not Found"} className="grid-item hover:cursor-pointer bg-white shadow-2xl rounded-lg p-8 mb-6 hover:shadow-xl transition duration-300 relative" onClick={() => openPopup(item)}>
                                        <h3 className="text-xl font-bold mb-2 w-5/6">{details ? details : "No Detail Found"}</h3>
                                        <div className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white text-xs rounded">{status ? status : "Not  Found"}</div>
                                        <div className="flex items-center justify-between mt-2 mx-6">
                                            <button className="text-blue-500 text-xs -ml-3">
                                                Show More
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )
            }

            {/* Popup */}
            {popupData && (
                <Popup popupData={popupData} closePopup={closePopup} />
            )}
        </div>
    );
};

export default DataGrid;

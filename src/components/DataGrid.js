import React, { useState } from 'react';
import { useGlobalContext } from '../context/Context';
import SearchForm from './SearchForm';
import Pagination from './Pagination';
import Popup from './Popup';

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

    if (loading) return (<h2>Loading...</h2>);
    if (error) return (<h2 className='text-danger'>Error: {error.message}</h2>);
    
    return (
        <>
            <h2>Data</h2>

            {/* Search form */}
            <SearchForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                handleReset={handleReset}
            />

            {/* Data Grid */}
            {filteredHits.length === 0 ? (
                <p>No matching data found.</p>
            ) : (
                <>
                    <div className="grid-container">
                        {filteredHits.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item) => {
                            const { capsule_serial, status, original_launch, type, details, reuse_count, landings } = item;
                            return (
                                <div key={capsule_serial ? capsule_serial : "No capsule_serial Found"} className="grid-item" onClick={() => openPopup(item)}>
                                    <h3>{details ? details : "No Detail Found"}</h3>
                                    <p>{status ? status : "No status Found"}</p>
                                    <p>{reuse_count ? reuse_count : "No reuse_count Found"}</p>
                                    <p>{landings ? landings : "No landings Found"}</p>
                                    <p>{type ? type : "No type Found"}</p>
                                    <p>{original_launch ? original_launch : "No original_launch Found"}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Pagination */}
                    <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
                </>
            )}

            {/* Popup */}
            {popupData && (
                <Popup popupData={popupData} closePopup={closePopup} />
            )}
        </>
    );
};

export default DataGrid;

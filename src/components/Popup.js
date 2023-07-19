import React from 'react';

const Popup = ({ popupData, closePopup }) => {
  // Function to format date in Date, Month, Year format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="popup-content bg-white rounded-lg p-6 shadow-lg transform scale-100 hover:scale-105 transition-transform duration-300 max-w-md w-full">
        <h3 className="text-2xl font-bold text-center mb-4">{popupData.details ? popupData.details : "No Detail Found"}</h3>
        <div className="flex items-center space-x-4 text-gray-600 justify-center mb-4">
          <div className="info-box">
            <p className="info-title">Status</p>
            <p className="info-data">{popupData.status ? popupData.status : "Not Found"}</p>
          </div>
          <div className="info-box">
            <p className="info-title">Reuse Count</p>
            <p className="info-data">{popupData.reuse_count ? popupData.reuse_count : "Not Found"}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-600 justify-center mb-4">
          <div className="info-box">
            <p className="info-title">Landings</p>
            <p className="info-data">{popupData.landings ? popupData.landings : "Not Found"}</p>
          </div>
          <div className='info-box'>
            <p className="info-title">Type</p>
            <p className="info-data">{popupData.type ? popupData.type : "Not Found"}</p>
          </div>
        </div>
        <div className='text-center'>
          <span className="text-gray-800 font-bold mb-4 text-md">{popupData.original_launch ? formatDate(popupData.original_launch) : "Not Found"}</span>
        </div>
        <button className="absolute bottom-4  right-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 text-sm" onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;

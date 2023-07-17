import React from 'react';

const Popup = ({ popupData, closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>{popupData.details ? popupData.details : "No Detail Found"}</h3>
        <p>{popupData.status ? popupData.status : "No status Found"}</p>
        <p>{popupData.reuse_count ? popupData.reuse_count : "No reuse_count Found"}</p>
        <p>{popupData.landings ? popupData.landings : "No landings Found"}</p>
        <p>{popupData.type ? popupData.type : "No type Found"}</p>
        <p>{popupData.original_launch ? popupData.original_launch : "No original_launch Found"}</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;

import React from 'react';
import bannerImage from '../assets/banner-image.jpg'; // Replace this with the actual image path

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <h2 className="headline">Welcome to Our Application</h2>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at orci eu felis facilisis finibus at vel nulla. Ut consequat elit sit amet turpis tincidunt, nec bibendum justo facilisis.</p>
            </div>
            <div className="banner-image">
                <img src={bannerImage} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;

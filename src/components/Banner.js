import React from 'react';
import bannerImage from '../assets/banner-image.jpg'; // Replace this with the actual image path

const Banner = () => {
    return (
        <div className="banner-container flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div className="banner-content max-w-md text-center px-6">
                <h2 className="headline text-4xl font-bold mb-4">SpaceX Launch Dashboard</h2>
                <p className="description text-lg mb-8">Explore and track SpaceX's rocket launches, capsules, and more with our interactive launch dashboard. Stay updated with the latest space missions and historical data from SpaceX's journey to space.</p>
            </div>
            <div className="banner-image flex-1">
                <img src={bannerImage} alt="Banner" className="w-full h-screen object-cover shadow-sm border-4 border-white" />
            </div>
        </div>
    );
};

export default Banner;
